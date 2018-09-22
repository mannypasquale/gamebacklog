var React = require('react');



class GamingSystems extends React.Component {
    
    render() {
        var systems = ["All", "Playstation", "Xbox", "Nintendo", "PC"];
        return (
            <div>
                <ul className="gaming-choice-list">
                    {systems.map(function(sys){
                        return (
                            <li>
                                {sys}
                            </li>
                        )
                    })}
                </ul>

            </div>

        );
    }
}

module.exports = GamingSystems;