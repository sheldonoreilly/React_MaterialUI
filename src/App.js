import React, { Component } from "react";
import axios from "axios";
import pixabayKey from "./config/keys";
import SearchBar from "./components/SearchBar";
import ImageViewer from "./components/ImageViewer";

export default class App extends Component {
	state = {
		searchText: "",
		amount: 15,
		apiUrl: "https://pixabay.com/api",
		images: []
	};

	handleSearchTermChange = e => {
		axios
			.get(
				`${this.state.apiUrl}/?key=${pixabayKey}&q=${e.target.value}&image_type=photo&per_page=${
					this.state.amount
				}`
			)
			.then(res => {
				this.setState({ images: res.data.hits });
			})
			.catch(err => {
				console.log("@@@@@@@@@@@@@@@@@@@@@@err :", err);
			});
	};

	render() {
		console.log("render@@@@@@");

		return (
			<div>
				<SearchBar searchChange={this.handleSearchTermChange} />
				<ImageViewer tileData={this.state.images} />
			</div>
		);
	}
}

// App.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(App);
