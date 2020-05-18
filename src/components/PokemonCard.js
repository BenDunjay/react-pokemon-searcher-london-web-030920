import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    let pokemon = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image"  onClick={() => this.props.toggleClick(pokemon)}>
            <img src={pokemon.toggled ? (pokemon.sprites.back) : (pokemon.sprites.front)}  alt={pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
