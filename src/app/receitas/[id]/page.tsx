'use client'
import InfoPill from "@/components/infoPill";
import PreparationStep from "@/components/PreparationStep";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "@/lib/data";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/api";


export default function ReceitaPage(){
    let {id} = useParams()
    const [recipe, setRecipe] = useState<Recipe|null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchRecipe = async () => {
            try {
                const response = await api.get(`/recipes/${id}`)
                setRecipe(response.data)
            } catch (error) {
                console.error("Erro ao requisitar receita", error)
            } finally{
                setLoading(false)
            }
        }
        fetchRecipe()
    }, [])
    
    if(loading){
        return(
            <main className="flex-grow py-8">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <p>Carregando receita...</p>
                    </div>
                </div>
            </main>
        )
    }

    if(!recipe){
        return notFound();
    }

    return(
        <main className="flex-grow py-8">
            <div className="container mx-auto flex flex-col items-center lg:items-start">
                <Link className="flex text-orange-500 hover:text-orange-700 transfor-colors mb-6" href='/receitas'>
                    <ChevronLeft/>
                    Voltar para receitas
                </Link>

                <section className="w-[90%] lg:w-auto rounded-lg overflow-hidden border border-slate-200 shadow-md">
                    <div className="relative h-96 w-full">
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col p-6 gap-6">
                        <div>
                            <h1 className="text-3xl font-bold">{recipe.title}</h1>
                            <p>{recipe.description}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <InfoPill title='Preparo' info={recipe.prepTime}/>
                            <InfoPill title='Cozimento' info={recipe.cookTime}/>
                            <InfoPill title='Porções' info={recipe.servings}/>
                            <InfoPill title='Categoria' info={recipe.category}/>

                        </div>
                        <div className="grid grid-row gap-8 lg:gap-0 lg:grid-cols-2">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {recipe.ingredients.map((ingredient)=>(
                                        <li key={ingredient.value} className="marker:text-orange-500">{ingredient.value}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-4">Modo de preparo</h2>
                                <ol className="space-y-4">
                                    {recipe.instructions.map((instruction, index)=> (
                                        <PreparationStep key={instruction.value} index={index + 1} description={instruction.value}/>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}