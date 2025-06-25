import { Recipe } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface RecipeCarsProps{
    recipe: Recipe
}

export default function RecipeCard({recipe}: RecipeCarsProps){
    return (
        <Link href={`/receitas/${recipe.id}`}>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                    />
                </div>
                <div className="flex flex-col p-4 gap-2">
                    <h3 className="text-lg font-bold">{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            </div>
        </Link>
    );
}