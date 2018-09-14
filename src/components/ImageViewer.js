import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
// import FlatButton from "@material-ui/core/FlatButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
import { Dialog, Button } from "@material-ui/core";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: "100%",
		height: "100%"
	},
	subheader: {
		width: "100%"
	}
});

class ImageGridList extends Component {
	state = {
		open: false,
		currentImage: ""
	};

	handleOpen(imageURL) {
		this.setState({ open: true, currentImage: imageURL });
		console.log("############");
	}

	handleClose = () => {
		this.setState({ open: false });
		console.log("############");
	};

	render() {
		const { classes } = this.props;
		const actions = [<Button label="Close" primary={true} onClick={this.handleClose} />];
		return (
			<div className={classes.root}>
				<GridList cellHeight={160} className={classes.gridList} cols={3}>
					{this.props.tileData.map(tile => (
						<GridListTile key={tile.webformatURL}>
							<img src={tile.webformatURL} alt={""} />
							<GridListTileBar
								subtitle={`likes: ${tile.likes} /downloads: ${tile.downloads}`}
								title={`tags: ${tile.tags}`}
								actionIcon={
									<IconButton onClick={() => this.handleOpen(tile.largeImageURL)}>
										<ZoomIn />
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>
				{/*Create the dialog*/}
				{console.log("image url is : ", this.state.currentImage)}
				<Dialog onClose={this.handleClose} open={this.state.open}>
					<img src={this.state.currentImage} alt="" style={{ width: "100%" }} />
				</Dialog>
			</div>
		);
	}
}
function showImageDialog() {
	console.log("Show image");
}

ImageGridList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
