import React, { Component } from 'react'

class New extends Component {
  render() {
    return (
      <div>
        <h1>Create a New Pokemon!</h1>
        <form action="/pokemon" method="post"></form>
            Name: <input type="text" name="name" /> <br />
            Level: <input type="text" name="level" /> <br />
            Ready To Evolve: <input type="checkbox" name='readyToEvolve' /> <br />
            <input type="submit" name="text" value="Create Pokemon"></input> <br />
            <a href="/pokemon">Who said you could make a new pokemon</a>
      </div>
    )
  }
}

export default New