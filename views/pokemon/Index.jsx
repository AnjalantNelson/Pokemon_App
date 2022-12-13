import React, { Component } from 'react'
import pokemon from '../../models/pokemon';

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };


export default class Index extends Component {
  render() {
    console.log(this.props.pokemon)
    const pokemon = this.props.pokemon
    return (
      <div>
        <nav>
            <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>
        <h1>All Pokemon</h1>
        {pokemon.map((pokemon, id) => {
            return (
                <a href={`/pokemon/${id}`}>
                    <li>{pokemon.name}</li>
                </a>
            )
        })}
        <a href='/pokemon/:id'></a>
      </div>
    )
  }
}
