import React from 'react';

const PokemonShort = (props) => {
    return (<img src={props.pokemon.sprite}
                 alt={props.pokemon.name}

    />)
}
export default PokemonShort;
