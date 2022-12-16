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
      fontFamily: 'Times new roman',
      textAlign: 'center',
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
      textAlign: 'center',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridGap: '10px'
  };
  const editor = {
      fontFamily: 'Cursive',
      fontSize: '16px',
      textDecoration: 'none',
      color: 'white'
  }
  const inputStyling = {
      backgroundColor: 'antiquewhite',
      border: '0px',
      borderRadius: '4px'
  }
  const formStyling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'center',
    gridGap: '5px',
    marginBottom: '10px'
  }

export default class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(this.props.Pokemon);
    return (
      <div>
        <html style={htmlStyling}>
        <nav style={navStyling}>
                <ul style={listingStyle}>
                    <li style={listItemStyle}><a href="/" className="newButton"> Go Back</a></li>
                </ul>
            </nav>
        <body style={bodyStyling}>
        <div style={myStyle} className="main-container">
        <h1 className="title">Edit Pokemon</h1>
        <form style={formStyling} action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={pokemon.name} /><br />
            Image: <input type="text" name="img" defaultValue={pokemon.img} /><br />
            <input type="submit" value="Submit Changes" />
        </form>
        </div>
        </body>
        </html>
      </div>
    )
  }
}
