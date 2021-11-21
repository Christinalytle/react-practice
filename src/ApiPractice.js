import React, {Component} from 'react'

class ApiPractice extends Component {
    constructor() {
        super()
        this.state = {
            loading: false, 
            character: {},
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false, 
                    character: data
                })
            })
    }

    render() {
        // const text = this.state.loading ? "Loading..." : <h1>{this.state.character.name} {this.state.character.height}</h1>
        return (
            <div>
                <p>{this.state.character.name}</p>  
                <p>{this.state.character.height}</p>
            </div>
        )
    }
}

export default ApiPractice 