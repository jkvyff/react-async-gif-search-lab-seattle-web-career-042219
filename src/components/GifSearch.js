import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor() {
        super() 
        this.state = {
            searchTerm: ""
        }
    }

    handleChange = (ev) => {
        this.setState({
            searchTerm: ev.target.value
        })
        console.log(this.state.searchTerm)
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.onSearch(this.state.searchTerm)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <input type="text"></input>
                    <input value="search"type="submit"></input>
                </form>

            </div>
        )
    }
}