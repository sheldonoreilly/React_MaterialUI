import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

const styles = theme => ({
	root: {
		width: "100%"
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit,
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit",
		width: "100%"
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	}
});

const Search_Bar = props => {
	const { classes } = props;
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="title" color="inherit" noWrap>
						Pixabay Photo Search
					</Typography>
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<Input
							placeholder="Search…"
							disableUnderline
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							onChange={props.searchChange}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

Search_Bar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search_Bar);
