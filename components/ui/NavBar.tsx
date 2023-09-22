import {Image, Spacer} from "@nextui-org/react";

export const NavBar = () => {
    return (
      <div className="flex justify-between">
        <div className="flex">
        <Image className="m-0 p-0"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de app"
        width={70}
        height={70}
        />
          <text color='white' >P</text>
          <text color='white' >okémon</text>
          <Spacer x={1}/>

        </div>
          <text color='white' >favoritos</text>
        
      </div>
    )
  }
  