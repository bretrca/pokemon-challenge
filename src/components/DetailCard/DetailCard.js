import { PokemonContainerDescription,PokemonDescData,PokemonDescHeader } from "./DetailCard.styled";

const DetailCard = ()=>{
    return (<PokemonContainerDescription>
    <PokemonDescHeader>
        [title of the name]
    </PokemonDescHeader>
    <PokemonDescData>
        <div>
            type: [type] 
        </div>
        <div>
            abilities: [abilities]
        </div>
        <div>
            description of moves
        </div>
    </PokemonDescData>
    </PokemonContainerDescription>)
}

export default DetailCard;