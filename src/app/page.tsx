'use client'
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/lib/data";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { toast } from "sonner"

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
        const fetchRecipes = async () =>{
            try {
                const response = await api.get('/recipes');
                setRecipes(response.data.slice(0,3))
            } catch (error) {
                console.error('Erro ao requisitar as receitas: ', error)
                toast.error('Erro ao requisitar receitas, tente novamente mais tarde!')
            }
        }
        fetchRecipes();
    }, [])
  return (
    <main className="flex-grow">
        <section className="bg-orange-50 py-12">
          <div className="flex flex-col gap-6 items-center text-center container mx-auto">
            <h1 className="text-5xl font-bold">Receitas deliciosas</h1>
            <p className="text-xl">Descubra receitas simples e saborosas para todas as ocasiões</p>
            <Link className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2 hover:scale-105 transition-all" href='/receitas'>Ver todas as receitas</Link>
          </div>
        </section>

        <section className="py-12">
          <div className="flex flex-col items-center container mx-auto gap-8">
            <h2 className="text-xl font-bold">Receitas em destaque</h2>
            <div className="flex flex-col items-center lg:flex-row w-full gap-8">
              {recipes.map((recipe)=> (
                <RecipeCard key={recipe.id} recipe={recipe}/>
              ))}
            </div>
            <Link className="flex text-orange-300 hover:text-orange-600 transition-colors" href='/receitas'>
              Ver todas as receitas
              <ChevronRight/>
            </Link>
          </div>
        </section>
    </main>
  );
}
