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
		amount: 20,
		apiUrl: "https://pixabay.com/api",
		safeSearch: true,
		grayScale: false,
		editorsChoice: false
	};

	fetchData() {
		const str = `${this.searchObj.apiUrl}/?key=${pixabayKey}&q=${this.searchObj.searchText}${
			this.searchObj.grayScale ? "&colors=grayscale" : ""
		}&safesearch=${this.searchObj.safeSearch}&editors_choice=${
			this.searchObj.editorsChoice
		}&image_type=photo&per_page=${this.searchObj.amount}`;

		console.log(str);

		axios
			.get(str)
			.then(res => {
				this.setState({ images: res.data.hits });
			})
			.catch(err => {
				console.log("err :", err);
			});
	}

	handleSettingsChange = searchSettings => {
		// console.log("searchSettings:", searchSettings);
		this.searchObj.safeSearch = searchSettings.safe;
		this.searchObj.editorsChoice = searchSettings.editor;
		this.searchObj.grayScale = searchSettings.gray;
		this.searchObj.amount = searchSettings.resultAmt;

		this.fetchData();
	};

	handleSearchTermChange = e => {
		this.searchObj.searchText = e.target.value;
		this.fetchData();
	};

	render() {
		return (
			<div>
				<Paper>
					<SearchBar searchChange={this.handleSearchTermChange} />
					<SettingsPanel settings={this.searchObj} settingsChange={this.handleSettingsChange} />
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
