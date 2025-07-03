import { RecipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Span } from "next/dist/trace";
import { Recipe } from "@/lib/data";


interface RecipeFormModalProps{
    isOpen: boolean;
    onClose: () => void
    onSave: (recipe: Omit<Recipe, 'id'>) => void
}

const DEFAULT_VALUES: RecipeFormData = {
    title: '',
    category: '',
    description: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: 1,
    ingredients: [{value: ''}],
    instructions: [{value: ''}],
}

export default function RecipeFormModal({
    isOpen, 
    onClose,
    onSave
}: RecipeFormModalProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
        control
} = useForm<RecipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
    defaultValues: DEFAULT_VALUES
})

const {
    fields: ingredientFields,
    append: appendIngredients,
    remove: removeIngredients
} = useFieldArray({
    control,
    name: 'ingredients'
})

const {
    fields: instructionFields,
    append: appendInstructionss,
    remove: removeInstructionss
} = useFieldArray({
    control,
    name: 'instructions'
})

const onSubmit = (data: RecipeFormData) => {
    const recipeData = {
        ...data,
        ingredients: data.ingredients.map((ingredient) => ingredient.value),
        instructions: data.instructions.map((instructions) => instructions.value)
    }
    console.log(recipeData)
    onSave(recipeData)
    reset()
    onClose()
}



const inputStyle = 'p-2 border border-zinc-200 rounded-md flex-grow w-full'
    
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white lg:min-w-2xl max-h-[90dvh] overflow-y-scroll">
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
                        <label htmlFor="image">Url da Imagem</label>
                        <input type="text" className={inputStyle} id="image" placeholder="/placeholder.svg" {...register("image")}/>
                        {errors.image && <span className="text-sm text-red-500">{errors.image.message}</span>}
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
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className="flex flex-col gap-1">
                            {ingredientFields.map((field, index)=>(
                                <div key={field.id} className="flex gap-2">
                                    <div className="flex-grow">
                                        <input type="text" id="ingredients" placeholder="Digite um ingrediente" className={inputStyle} {...register(`ingredients.${index}.value`)}/>
                                        {errors.ingredients?.[index]?.value && <span className="text-sm text-red-500" >{errors.ingredients?.[index]?.value.message}</span>}
                                    </div>
                                    {ingredientFields.length> 1 &&<button type="button" onClick={() => removeIngredients(index)} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md">Remover</button>}
                                </div>
                            ))}
                            <button type="button" onClick={()=> appendIngredients({value:''})} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md h-fit w-fit">Adicionar Ingrediente</button>
                        </div>
                    </div>

                    {/* Instruções*/}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="instructions">Instruções</label>
                        <div className="flex flex-col gap-1">
                        {instructionFields.map((field, index)=>(
                                <div key={field.id} className="flex gap-2">
                                    <div className="flex-grow">
                                        <textarea id="instructions" placeholder="Digite uma instrução" className={inputStyle} {...register(`instructions.${index}.value`)}/>
                                        {errors.ingredients?.[index]?.value && <span className="text-sm text-red-500" >{errors.ingredients?.[index]?.value.message}</span>}
                                    </div>
                                    {instructionFields.length> 1 &&<button onClick={() => removeInstructionss(index)} type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md h-fit">Remover</button>}
                                </div>
                            ))}
                            <button onClick={() => appendInstructionss({value: ''})} type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-200 transition-colors px-4 py-2 text-md h-fit w-fit">Adicionar Instrução</button>
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

