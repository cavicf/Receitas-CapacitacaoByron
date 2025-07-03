import { Recipe } from "@/lib/data";
import { Edit, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RecipeCarsProps{
    recipe: Recipe
}

export default function RecipeCard({recipe}: RecipeCarsProps){
    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
    }

    return (
        <Link href={`/receitas/${recipe.id}`}>
            <div className="border border-slate-200 rounded-xl w-3xs lg:w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col p-4 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold hover:text-orange-500 transition-colors">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-500 rounded-sm bg-gray-200 px-2 py-1">
                            {recipe.category}
                        </span>
                        <div className="flex gap-2">
                            <button type="button" onClick={(e) => handleEdit(e)} className="p-2 border border-gray-200 rounded-sm hover:bg-gray-200 transition-colors cursor-pointer">
                                <Edit size={16}/>
                            </button>
                            <button type="button" onClick={(e) => handleDelete(e)} className="p-2 border border-gray-200 rounded-sm hover:bg-gray-200 transition-colors cursor-pointer">
                                <Trash2 size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}