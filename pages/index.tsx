import { GetStaticProps, NextPage } from "next"
import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { PokemonListResponse, SmallPokemon } from "@/interfaces"
import { PokemonsCard } from "@/components/pokemon"



interface Props {
  pokemons: PokemonListResponse['results']
}

const Home: NextPage<Props> = ({pokemons}) => {
  console.log(pokemons)
  return (
    <Layout title="Listado de pokemons">
      <div className="gap-6 grid sm:grid-cols-8  ">
      {pokemons.map((pokemon) => (
        <PokemonsCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data)
const pokemons: SmallPokemon[]= data.results.map((pokemon, index) => ({
  ...pokemon,
  id: index + 1,
  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
}))

  return {
    props: {
      pokemons 
    }
  }
}

export default Home