import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

	state = {
		gifs: []
	}

	render() {
		return (
			<div>
				<GifSearch onSearch={this.findGifs} />
                <GifList gifs={this.state.gifs} />
			</div>
		)
	}

	componentDidMount() {
		this.findGifs()
	}

	findGifs = (searchTerm) => {
		const API = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
		fetch(API)
		.then(res => res.json())
		.then(json => this.setState({ gifs: json.data.slice(0,3) }))
	}

}

export default GifListContainer