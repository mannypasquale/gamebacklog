var React = require('react');
var glogo = require('../gamepad-solid.svg');
var blogo = require('../book-reader-solid.svg');


class Header extends React.Component {
    render() {
    return(
            <div className = "App" >
            <header className="App-header">
                <img src={glogo} className="App-logo" alt="logo" />
                <img src={blogo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Mannys Gaming Backlog</h1>
            </header>
            </div>
          );

    }
}

module.exports = Header;