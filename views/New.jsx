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
     
  };
// List Styling
const listingStyle = {
      listStyle: 'none',
      borderRadius: '4px',
      textAlign: 'center',
      padding: '0px',
      textDecoration: 'none'
  };
// ListItem Styling
  const listItemStyle = {
      textAlign: 'center',
      textDecoration: 'none'
  };
  const formStyling = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      alignContent: 'center',
      gridGap: '5px',
      marginBottom: '10px'
    }

export class New extends Component {
  render() {
    return (
      <div>
        <html style={htmlStyling}>
            <body style={bodyStyling}>
            <nav style={navStyling}>
                <ul style={listingStyle}>
                    <li style={listItemStyle}><a href="/" className="newButton"> Go Back</a></li>
                </ul>
            </nav>
                <div style={myStyle} className="main-container">
                    <h1 className="title">Create a new pokemon!</h1>
                    <form style={formStyling} action="/pokemon" method="post" autoComplete="off">
                        Name: <input type="text" name="name" autoComplete="off"/> <br />
                        Level: <input type="text" name="name" autoComplete="off"/> <br />
                        Image: <input type="text" name="img" autoComplete="off"/><br />
                        Ready To Evolve: <input type="checkbox" name="name" autoComplete="off"/> <br />
                        <input type="submit" name="" value="Add New Pokemon" />
                    </form>
                </div>
            </body>
        </html>
      </div>
    )
  }
}

export default New