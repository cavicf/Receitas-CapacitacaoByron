import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/lib/data";

export default function ReceitasPage(){
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center lg:text-left">Todas as Receitas</h1>
                <div className="grid grid-rows-3 lg:grid-cols-3 gap-8 mt-8">
                    {recipes.map((recipe)=> (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>
        </main>
    );
}