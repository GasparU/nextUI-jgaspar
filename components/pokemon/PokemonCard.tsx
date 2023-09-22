import { FC } from "react"
import { useRouter } from "next/router";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces"

interface Props {
    pokemon: SmallPokemon
}

export const PokemonsCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()
    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
        <Card key={pokemon.id} isPressable onClick={onClick} >
            <CardBody className="overflow-visible p-0 flex items-center">
                <Image className="h-[140px]" radius="lg" alt={pokemon.name} src={pokemon.img} />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <p className="text-default-500" >{pokemon.name}</p>
                <b>#{pokemon.id}</b>
            </CardFooter>
        </Card>
    )
}