import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";

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
	console.log("ImageGridList render");

	const { classes } = props;
	return (
		<div className={classes.root}>
			<GridList cellHeight={160} className={classes.gridList} cols={3}>
				{props.tileData.map(tile => (
					<GridListTile key={tile.webformatURL}>
						<img src={tile.webformatURL} alt={""} />
						<GridListTileBar
							subtitle={`likes: ${tile.likes} /downloads: ${tile.downloads}`}
							title={`tags: ${tile.tags}`}
							actionIcon={
								<IconButton className={classes.icon}>
									<ZoomIn />
								</IconButton>
							}
						/>
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
