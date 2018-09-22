var React = require('react');
var Header = require('./Header');
var GamingSystems = require('./GamingSystems');
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <GamingSystems />
      </div>
    )
  }
}
export default App;
