import { RecipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Span } from "next/dist/trace";


interface RecipeFormModalProps{
    isOpen: boolean;
    onClose: () => void
}

export default function RecipeFormModal({isOpen, onClose}: RecipeFormModalProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors}
} = useForm<RecipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit"
})

    const onSubmit = (data: RecipeFormData) => {
        console.log(data)
        reset()
        onClose()
    }
    
    const inputStyle = 'p-2 border border-zinc-200 rounded-md flex-grow'
    
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova Receita</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2 gap-2">
                        {/* Titulo */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Título</label>
                            <input className={inputStyle} type="text" id="title" {...register("title")}/>
                            {errors.title && <span className="text-sm text-red-500">{errors.title.message}</span>}
                        </div>
                        {/* Categoria */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className={inputStyle} type="category" id="category" {...register("category")}/>
                            {errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}
                        </div>
                    </div>
                        {/* Descrição */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Descrição</label>
                        <textarea className={inputStyle} id="description" {...register("description")}/>
                        {errors.description && <span className="text-sm text-red-500">{errors.description.message}</span>}
                    </div>
                    {/* Url da Imagem */}
                    <div className="flex flex-col gap-1 col-span-2">
                        <label htmlFor="imageUrl">Url da Imagem</label>
                        <input type="text" className={inputStyle} id="imageUrl" placeholder="/placeholder.svg" {...register("imageURL")}/>
                        {errors.imageURL && <span className="text-sm text-red-500">{errors.imageURL.message}</span>}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {/* Tempo de preparo */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="prepTime">Tempo de Preparo</label>
                            <input className={inputStyle} type="text" id="prepTime" placeholder="15 minutos" {...register("prepTime")}/>
                            {errors.prepTime && <span className="text-sm text-red-500">{errors.prepTime.message}</span>}
                        </div>
                        {/* Tempo de cozimento */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="cookTime">Tempo de cozimento</label>
                            <input className={inputStyle} type="text" id="cookTime" placeholder="30 minutos" {...register("cookTime")}/>
                            {errors.cookTime && <span className="text-sm text-red-500">{errors.cookTime.message}</span>}
                        </div>
                        {/* Porções */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="servings">Porções</label>
                            <input className={inputStyle} type="number" id="servings" defaultValue={1} {...register("servings")}/>
                            {errors.servings && <span className="text-sm text-red-500">{errors.servings.message}</span>}
                        </div>
                    </div>

                    {/* Lista de Ingredientes */}
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className="flex gap-2">
                                <input type="text" id="ingredients" className={inputStyle}/>
                                <button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md">Remover</button>
                            </div>
                            <button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md h-fit w-fit">Adicionar Ingrediente</button>
                        </div>
                    </div>

                    {/* Instruções*/}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="instructions">Instruções</label>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2">
                                <textarea id="instructions" className={inputStyle}/>
                                <button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md h-fit">Remover</button>
                            </div>
                            <button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md h-fit w-fit">Adicionar Instrução</button>
                        </div>
                    </div>

                    <div className="flex gap-2 self-end">
                        <button type="button" onClick={onClose} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md">Cancelar</button>
                        <button type="submit" className="bg-black rounded-md hover:bg-gray-800 text-white transition-colors px-4 py-2 text-md">Criar Receita</button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
};

