import React, { Component } from 'react'
import pokemon from '../models/pokemon';

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

export default class Index extends Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See all the pokemon!</h1>
        <ul>
            {pokemon.map((pokemon, id) => {
                return(
                    <li>
                        <a href= {`/pokemon/${id}`}>{pokemon.name}</a>
                    </li>
                )
            })}
        </ul>
      </div>
      
    )
  }
}