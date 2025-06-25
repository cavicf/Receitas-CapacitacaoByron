import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReceitaPage(){
    return(
        <main className="flex-grow py-8">
            <div className="container mx-auto ">
                <Link className="flex text-orange-500 hover:text-orange-700 transfor-colors" href='/receitas'>
                    <ChevronLeft/>
                    Voltar para receitas
                </Link>

                <section>
                    <div className="relative h-96 w-full">
                        <Image
                            src=''
                            alt="Titulo da receita"
                            fill
                        />
                    </div>
                    <div>
                        <h1>Titulo da receita</h1>
                        <p>descricao</p>
                        <div>
                            {/* TODO: componenetes de info de preparo */}
                        </div>
                        <div>
                            {/* coluna dos ingredientes */}
                        </div>
                        <div>
                            {/* coluna de preparo */}
                            {/* TODO: componente de passo de preparo */}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}