import Link from "next/link";

export default function Header(){
    return (
        <header className="w-full bg-white text-black py-4 border-b border-slate-200 drop-shadow-lg">
            <div className="flex justify-between container mx-auto">
                <Link className="text-xl font-bold hover:scale-105 transition-all" href='/'>
                    Receitas Deliciosas
                </Link>
                <nav className="flex gap-6">
                    <Link className="hover:text-orange-500 transition-colors" href='/'>
                        Início
                    </Link>
                    <Link className="hover:text-orange-500 transition-colors" href='/receitas'>
                        Receitas
                    </Link>
                </nav>
            </div>
        </header>
    )
}