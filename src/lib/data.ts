export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Bolo de Chocolate",
    description: "Um delicioso bolo de chocolate fofinho e úmido, perfeito para qualquer ocasião.",
    image: "/receitas/boloChocolate.png",
    prepTime: "15 minutos",
    cookTime: "35 minutos",
    servings: 8,
    ingredients: [
      "2 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "3/4 xícara de cacau em pó",
      "2 colheres de chá de fermento em pó",
      "1 colher de chá de bicarbonato de sódio",
      "1 colher de chá de sal",
      "2 ovos",
      "1 xícara de leite",
      "1/2 xícara de óleo vegetal",
      "2 colheres de chá de essência de baunilha",
      "1 xícara de água quente",
    ],
    instructions: [
      "Pré-aqueça o forno a 180°C e unte uma forma redonda.",
      "Em uma tigela grande, misture os ingredientes secos: farinha, açúcar, cacau, fermento, bicarbonato e sal.",
      "Adicione os ovos, leite, óleo e baunilha. Bata com um batedor de arame por cerca de 2 minutos.",
      "Adicione a água quente à massa. A massa ficará bem líquida, mas é normal.",
      "Despeje a massa na forma preparada.",
      "Asse por 30-35 minutos, ou até que um palito inserido no centro saia limpo.",
      "Deixe esfriar por 10 minutos antes de desenformar.",
    ],
    category: "Sobremesas",
  },
  {
    id: "2",
    title: "Risoto de Cogumelos",
    description: "Um risoto cremoso com cogumelos frescos e parmesão, perfeito para um jantar especial.",
    image: "/receitas/risotoCogumelos.png",
    prepTime: "10 minutos",
    cookTime: "30 minutos",
    servings: 4,
    ingredients: [
      "1 1/2 xícara de arroz arbóreo",
      "400g de cogumelos variados",
      "1 cebola média picada",
      "2 dentes de alho picados",
      "1/2 xícara de vinho branco seco",
      "4 xícaras de caldo de legumes quente",
      "1/2 xícara de queijo parmesão ralado",
      "2 colheres de sopa de manteiga",
      "2 colheres de sopa de azeite de oliva",
      "Sal e pimenta a gosto",
      "Salsinha picada para finalizar",
    ],
    instructions: [
      "Em uma panela grande, aqueça o azeite e 1 colher de manteiga em fogo médio.",
      "Adicione a cebola e refogue até ficar transparente, cerca de 3 minutos.",
      "Adicione o alho e refogue por mais 1 minuto.",
      "Adicione os cogumelos e cozinhe até que estejam macios e dourados.",
      "Adicione o arroz e mexa por 1-2 minutos até que fique levemente translúcido.",
      "Despeje o vinho branco e mexa até que seja absorvido.",
      "Adicione o caldo de legumes, uma concha por vez, mexendo frequentemente e esperando que o líquido seja absorvido antes de adicionar mais.",
      "Quando o arroz estiver al dente (cerca de 18-20 minutos), retire do fogo.",
      "Adicione o queijo parmesão e a manteiga restante, mexendo até incorporar.",
      "Tempere com sal e pimenta a gosto e finalize com salsinha picada.",
    ],
    category: "Pratos Principais",
  },
  {
    id: "3",
    title: "Salada Caprese",
    description: "Uma salada italiana clássica com tomate, mussarela de búfala e manjericão fresco.",
    image: "/receitas/salada.png",
    prepTime: "10 minutos",
    cookTime: "0 minutos",
    servings: 2,
    ingredients: [
      "2 tomates maduros grandes",
      "200g de mussarela de búfala",
      "Folhas de manjericão fresco",
      "2 colheres de sopa de azeite de oliva extra virgem",
      "1 colher de sopa de vinagre balsâmico",
      "Sal e pimenta a gosto",
    ],
    instructions: [
      "Corte os tomates e a mussarela em fatias de aproximadamente 1 cm de espessura.",
      "Em um prato, alterne as fatias de tomate e mussarela.",
      "Distribua as folhas de manjericão por cima.",
      "Regue com azeite de oliva e vinagre balsâmico.",
      "Tempere com sal e pimenta a gosto.",
      "Sirva imediatamente.",
    ],
    category: "Entradas",
  },
]