import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

      toggleClick = (pokemon) => {
      pokemon.toggled = !pokemon.toggled
      let toggle = pokemon.toggled
      this.setState({
        toggled: toggle
      })
    } 

  render() {

    let allPokemon = this.props.allPokemon 

    return (
      <Card.Group itemsPerRow={6}>
        <h1>{allPokemon.map(pokemon => <PokemonCard pokemon={pokemon} toggleClick={this.toggleClick}  key={pokemon.id}/>)} </h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
