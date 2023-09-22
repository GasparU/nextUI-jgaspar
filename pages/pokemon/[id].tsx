import { Layout } from "@/components/layouts"
import { useRouter } from "next/router"


const PokemonPage = () => {

    const router = useRouter()
    console.log(router.query)

  return (
    <div>
        <Layout title="Pokemon Gaspar">
            <h1>Hola Pokemon</h1>
        </Layout>
    </div>
  )
}

export default PokemonPage