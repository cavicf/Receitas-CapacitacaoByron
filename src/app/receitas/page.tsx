'use client'

import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import api from "@/lib/api";
import type {Recipe} from "@/lib/data"
import { Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner"

export default function ReceitasPage(){
    const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false)
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [modalMode, setModalMode] = useState<'create'|'edit'>('create')
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe|undefined>(undefined)
    const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchRecipes = async () =>{
            try {
                const response = await api.get('/recipes');
                setRecipes(response.data)
            } catch (error) {
                console.error('Erro ao requisitar as receitas: ', error)
                toast.error('Erro ao requisitar receitas, tente novamente mais tarde!')
            }
        }
        fetchRecipes();
    }, [])

    const filterRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOpenDeleteConfirmationModal = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setIsDeleteConfirmationModalOpen(true)
    }
    
    const handleDeleteRecipe = async () => {
        try {
            if(selectedRecipe){
                await api.delete(`/recipes/${selectedRecipe.id}`)
                setRecipes((prev) => prev.filter((recipe)=> recipe.id !== selectedRecipe.id))
                setIsDeleteConfirmationModalOpen(false)
                setSelectedRecipe(undefined)
            }
            toast.success('Receita excluida com sucesso!')
        } catch (error) {
            console.error('erro ao deletar receita', error)
            toast.error('Erro ao deletar receita!')
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

    const handleSaveRecipe = async (recipeData: Omit<Recipe, 'id'> | Recipe) => {
        try {
            if(modalMode === 'create'){
                const response = await api.post('/recipes', recipeData)
                const newRecipe = response.data
                setRecipes((prev) => [...prev, newRecipe])
                toast.success('Receita criada com sucesso!')
            }else{
                const updateRecipe = recipeData as Recipe
                const response = await api.put(`/recipes/${updateRecipe.id}`, updateRecipe)
                setRecipes((prev)=> prev.map((recipe) => (recipe.id === updateRecipe.id ? response.data : recipe )))
                toast.success('Receita editada com sucesso!')
            }
        handleCloseModal()
        
        } catch (error) {
            console.error(`Erro ao ${modalMode==="create" ? 'create' : 'editar'} a receita`, error)
            toast.error(`Erro ao ${modalMode==="create" ? 'create' : 'editar'} a receita`)
        }
        
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
                <div className="relative w-full mt-6">
                    <Search  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18}/>
                    <input type="text" placeholder="Buscar por nome ou categoria..." value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} className="w-full py-1 border border-gra-100 rounded-sm px-10"/>
                </div>
                <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {filterRecipes.map((recipe)=> (
                        <RecipeCard key={recipe.id} recipe={recipe} onEdit={() => handleOpenEditModal(recipe)} onDelete={() => handleOpenDeleteConfirmationModal(recipe)}/>
                    ))}
                </div>
            </div>
            <RecipeFormModal isOpen={isRecipeModalOpen} onClose={handleCloseModal} onSave={handleSaveRecipe} mode={modalMode} recipe={selectedRecipe}/>

            <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOpen} onClose={() => setIsDeleteConfirmationModalOpen(false)} onConfirm={handleDeleteRecipe} recipe={selectedRecipe}/>
        </main>
    );
}     