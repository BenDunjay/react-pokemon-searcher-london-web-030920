import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ""
  }

  addPokemon = (event, newPokemon) => {
    event.preventDefault()
    fetch(`http://localhost:3000/pokemon`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPokemon)
      }).then(
        this.fetchPokemon()
      )
  }

  
  fetchPokemon = () => {
    fetch(`http://localhost:3000/pokemon`)
    .then(response => response.json())
    .then(data => this.setState({
        pokemon: data
    }))
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  filterPokemon = () => {
let pokemon = [...this.state.pokemon]
return pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection allPokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
