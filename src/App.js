import React, { Component } from "react";
import axios from "axios";
import pixabayKey from "./config/keys";
import SearchBar from "./components/SearchBar";
import ImageViewer from "./components/ImageViewer";
import SettingsPanel from "./components/SettingsPanel";
import Paper from "@material-ui/core/Paper";

export default class App extends Component {
	state = {
		images: []
	};

	searchObj = {
		searchText: "",
		amount: 10,
		apiUrl: "https://pixabay.com/api"
	};

	fetchData() {
		console.log("fetchData");
		axios
			.get(
				`${this.searchObj.apiUrl}/?key=${pixabayKey}&q=${
					this.searchObj.searchText
				}&colors=grayscale&image_type=photo&per_page=${this.searchObj.amount}`
			)
			.then(res => {
				this.setState({ images: res.data.hits });
			})
			.catch(err => {
				console.log("@@@@@@@@@@@@@@@@@@@@@@err :", err);
			});
	}

	handleSettingsChange = searchSettings => {
		console.log("searchSettings:", searchSettings);
		this.searchObj.amount = searchSettings.resultAmt;
		this.fetchData();
	};

	handleSearchTermChange = e => {
		this.searchObj.searchText = e.target.value;
		this.fetchData();
	};

	render() {
		console.log("render@@@@@@");

		return (
			<div>
				<Paper>
					<SearchBar searchChange={this.handleSearchTermChange} />
					<SettingsPanel settingsChange={this.handleSettingsChange} />
					<ImageViewer tileData={this.state.images} />
				</Paper>
			</div>
		);
	}
}

// App.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(App);
