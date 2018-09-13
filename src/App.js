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
				`${this.state.apiUrl}/?key=${pixabayKey}&q=${this.state.searchText}&image_type=photo&per_page=${
					this.state.amount
				}`
			)
			.then(res => {
				console.log("res.data.hits:", res.data.hits);
				this.setState({ images: res.data.hits });
			})
			.catch(err => {
				console.log("err :", err);
			});
	};

	render() {
		const { classes } = this.props;
		const { title, steps } = this.state;
		return (
			<div>
				<SearchBar searchChange={this.handleSearchTermChange} />
				<ImageViewer />
			</div>
		);
	}
}

// App.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(App);
