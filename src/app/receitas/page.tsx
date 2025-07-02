'use client'

import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import { recipes } from "@/lib/data";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ReceitasPage(){
    const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false)
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <div className="flex justify-between w-full">
                    <h1 className="text-3xl font-bold text-center lg:text-left">Todas as Receitas</h1>
                    <button onClick={() => setIsRecipeModalOpen(true)} className="flex items-center gap-2 bg-black text-white px-4 py-2 border rounded-lg hover:bg-gray-800 trasition-colors">
                        <Plus className="size={16"/>
                        Nova Receita 
                    </button>
                </div>
                <div className="grid grid-rows-3 justify-items-center lg:grid-cols-3 gap-8 mt-8">
                    {recipes.map((recipe)=> (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>
            <RecipeFormModal isOpen={isRecipeModalOpen} onClose={()=> setIsRecipeModalOpen(false)}/>
        </main>
    );
}