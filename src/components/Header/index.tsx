import { ChefHat, House } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white text-black py-4 border-b border-slate-200 drop-shadow-lg">
            <div className="flex justify-between items-center container mx-auto px-4">
                <Link className="text-xl font-bold hover:scale-105 transition-all" href='/'>
                    Receitas Deliciosas
                </Link>
                <nav className="hidden lg:flex gap-6">
                    <Link className="hover:text-orange-500 transition-colors" href='/'>
                        Início
                    </Link>
                    <Link className="hover:text-orange-500 transition-colors" href='/receitas'>
                        Receitas
                    </Link>
                </nav>
                <nav className="flex gap-4 lg:hidden">
                    <Link href='/'>
                        <House/>
                    </Link>
                    <Link href='/receitas'>
                        <ChefHat/>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
