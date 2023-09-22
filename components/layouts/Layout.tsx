import { FC } from "react"
import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
    children: JSX.Element | JSX.Element[];
    title: string;
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="José Gaspar" />
            <meta name="description" content={`Información sobre el pokémon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        </Head>

        <NavBar/>

        <main style={{
            padding: '0px, 20px'
        }
        }>
            {children}
        </main>
    </>
  )
}
