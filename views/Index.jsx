import React, { Component } from 'react'

// HTML Styling
const bodyStyling = {
  margin: '0 auto',
  textAlign: 'center',
  backgroundImage: 'url(https://images.wallpapersden.com/image/download/pokemon-pikachu-art_a25tbW6UmZqaraWkpJRmbmdlrWZlbWU.jpg)',
  marginTop: '1%',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden'
};
const navStyling = {
  textAlign: 'center',
}
const htmlStyling = {
  margin: '0 auto',
  textAlign: 'center',
  backgroundImage: 'url(https://images.wallpapersden.com/image/download/pokemon-pikachu-art_a25tbW6UmZqaraWkpJRmbmdlrWZlbWU.jpg)',
  width: '100vw',
  height: '100vh'
};
// Base Styling
const myStyle = {
      color: '#ffffff',
      background: 'red',
      padding: '8px',
      fontSize: '20px',
      borderRadius: '7px',
      fontFamily: 'monospace',
      textAlign: 'center',
      maxWidth: '1400px',
      margin: '0 auto',
  };
// List Styling
const listingStyle = {
      listStyle: 'none',
      borderRadius: '4px',
      textAlign: 'center',
      textDecoration: 'none'
  };
// ListItem Styling
  const listItemStyle = {
      textAlign: 'center',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gridGap: '10px'
  };
  const editor = {
      fontFamily: 'Times new roman',
      fontSize: '16px',
      textDecoration: 'none',
      color: 'white'
  }


  export default class Index extends Component {
    render() {
      const {Pokemon} = this.props;
      console.log(Pokemon)
      return (
      <html style={htmlStyling}>
          <body style={bodyStyling}>
          <nav style={navStyling}>
                  <ul style={listingStyle}>
                      <li style={listItemStyle}><a href="/new" className="newButton"> Create New Pokemon</a></li>
                  </ul>
              </nav>
              <div style={myStyle}>
                      <p className="title"><a href="/"><img src="https://i.ibb.co/wRQH3Gh/Pokedex-logo.png" alt="PokeDex Logo" /></a></p>
                      <ul style={listingStyle}>
                          {Pokemon.map((Pokemon) => {
                          return (
                              <li style={listItemStyle}>
                                  <a href={`/pokemon/${Pokemon.id}`}> {Pokemon.name}</a>
                                  <a style={editor} href={`/pokemon/${Pokemon.id}/edit`} className="editor">Edit {Pokemon.name}</a>
                                  <form action={`/pokemon/${Pokemon.id}?_method=DELETE`} method="POST">
                                      <input type="submit" value="Remove Pokemon"/>
                                  </form>
                              </li>
                          );
                      })}
                  </ul>
              </div>
          </body>
      </html>
      )
    }
  }