import {Link} from "./Link"

export function Header() {
    return(
        <header className="headerfix">
            <Link href="/" style={{textDecoration:'none'}}>
                <h1 style={{color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                    Portfolio - Ale
                </h1>
            </Link>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/search">Empleos</Link>
                <a href="https://github.com/Alex-Lett" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
        </header>

    )
}