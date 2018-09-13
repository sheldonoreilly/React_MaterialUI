import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "./tileData";

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

function ImageGridList(props) {
	console.log("Grid render&&&&&&&&&&&&");

	const { classes } = props;
	return (
		<div className={classes.root}>
			<GridList cellHeight={200} className={classes.gridList} cols={3}>
				{props.tileData.map(tile => (
					<GridListTile key={tile.previewURL} cols={tile.cols || 1}>
						<img src={tile.previewURL} alt="" />
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

ImageGridList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
