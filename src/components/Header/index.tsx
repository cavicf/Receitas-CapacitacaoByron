import Link from "next/link";

export default function Header(){
    return (
        <header>
            <Link href='/'>
                Receitas Deliciosas
            </Link>
            <nav>
                <Link href='/'>
                    Início
                </Link>
                <Link href='/receitas'>
                    Receitas
                </Link>
            </nav>
        </header>
    )
}