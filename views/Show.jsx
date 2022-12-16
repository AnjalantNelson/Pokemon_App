import React, { Component } from 'react'

// HTML Styling
const bodyStyling = {
    margin: 'o auto',
    textAlign: 'center',
    backgroundImage: 'url(https://images.wallpapersden.com/image/download/pokemon-pikachu-art_a25tbW6UmZqaraWkpJRmbmdlrWZlbWU.jpg)',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
};
// NAV Styling
const navStyling = {
    textAlign: 'center',
  }
// CSS STYLING
const imageStyling = {
    padding: '8px',
    borderRadius: '10px',
    width: '250px',
    height: 'auto',
    marginTop: '-1%',
    mixBlendMode: 'multiply'
  };
// CENTERED STYLING
const centeredStyling = {
    background: 'white',
    padding: '8px',
    fontSize: '20px',
    borderRadius: '7px',
    fontFamily: 'monospace',
    textAlign: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
}
// List Styling
const listingStyle = {
    listStyle: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    textDecoration: 'none'
};
// ListItem Styling
const listItemStyle = {
    textalign: 'center',
    textDecoration: 'none'
};


class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon);
        return (
        <html>
            <body style={bodyStyling}>
            <nav style={navStyling}>
                <ul style={listingStyle}>
                    <li style={listItemStyle}><a href="/" className="backToHome">Back</a></li>
                </ul>
            </nav>
                <div style={centeredStyling}>
                    <a href="/" className="homeLink"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="PokeDex Logo" /></a>
                    <h1 className="title">Gotta Catch 'Em All</h1>
                    <h2 className="pokeName">{pokemon.name}</h2>
                    <img style={imageStyling} src={pokemon.img} alt={pokemon.name}></img>
                    <br />
                    <br />
                    <br />
                </div>
            </body>
        </html>
        )
    }
}

module.exports = Show