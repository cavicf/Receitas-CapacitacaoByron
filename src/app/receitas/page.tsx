'use client'

import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import { recipes as initialRecipes } from "@/lib/data";
import type {Recipe} from "@/lib/data"
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ReceitasPage(){
    const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false)
    const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes)
    const [modalMode, setModalMode] = useState<'create'|'edit'>('create')
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe|undefined>(undefined)
    const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false)

    const handleOpenDeleteConfirmationModal = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setIsDeleteConfirmationModalOpen(true)
    }
    
    const handleDeleteRecipe = () => {
        if(selectedRecipe){
            setRecipes((prev) => prev.filter((recipe)=> recipe.id !== selectedRecipe.id))
            setIsDeleteConfirmationModalOpen(false)
            setSelectedRecipe(undefined)
        }
    }

    const handleOpenCreateModal =() => {
        setModalMode('create')
        setSelectedRecipe(undefined)
        setIsRecipeModalOpen(true)
    }

    const handleOpenEditModal = (recipe: Recipe) => {
        setModalMode('edit')
        setSelectedRecipe(recipe)
        setIsRecipeModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsRecipeModalOpen(false)
    }

    const handleSaveRecipe = (recipeData: Omit<Recipe, 'id'> | Recipe) => {
        if(modalMode === 'create'){
            const newRecipe: Recipe = {
                ...recipeData,
                id: (initialRecipes.length+1).toString()
            }
            setRecipes((prev)=>[...prev, newRecipe])
        }else{
            const updateRecipe = recipeData as Recipe
            setRecipes((prev)=> prev.map((recipe) => (recipe.id === updateRecipe.id ? updateRecipe : recipe )))
        }
        handleCloseModal()     
    }
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
                    <h1 className="text-3xl font-bold text-center lg:text-left">Todas as Receitas</h1>
                    <button onClick={handleOpenCreateModal} className="flex items-center gap-2 bg-black text-white px-4 py-2 border rounded-lg hover:bg-gray-800 trasition-colors">
                        <Plus size={16}/>
                        Nova Receita 
                    </button>
                </div>
                <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {recipes.map((recipe)=> (
                        <RecipeCard key={recipe.id} recipe={recipe} onEdit={() => handleOpenEditModal(recipe)} onDelete={() => handleOpenDeleteConfirmationModal(recipe)}/>
                    ))}
                </div>
            </div>
            <RecipeFormModal isOpen={isRecipeModalOpen} onClose={handleCloseModal} onSave={handleSaveRecipe} mode={modalMode} recipe={selectedRecipe}/>

            <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOpen} onClose={() => setIsDeleteConfirmationModalOpen(false)} onConfirm={handleDeleteRecipe} recipe={selectedRecipe}/>
        </main>
    );
}