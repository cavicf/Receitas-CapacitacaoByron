import { title } from "process"
import * as yup from "yup"
export const recipeSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    category: yup.string().required('A categoria é obrigatória'),
    description: yup.string().required('A descrição é obrigatória'),
    imageURL: yup.string().required('A URL da imagem é obrigatória'),
    prepTime: yup.string().required("O tempo de cozimento é obrigatório"),
    cookTime: yup.string().required("O tempo de preparo é obrigatório"),
    servings: yup.number().typeError("As porções devem ser um número").positive("O número de porções deve ser positivo").integer("O número de porções deve ser inteiro").min(1, "Deve haver pelo menos 1 porção").required("O número de porções deve ser obrigatório")
})

export type RecipeFormData = yup.InferType<typeof recipeSchema>