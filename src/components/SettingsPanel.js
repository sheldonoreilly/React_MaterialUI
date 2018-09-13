import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	icon: {
		verticalAlign: "bottom",
		height: 20,
		width: 20
	},
	details: {
		alignItems: "center"
	},
	column: {
		flexBasis: "25%"
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline"
		}
	}
});

class DetailedExpansionPanel extends Component {
	state = {
		safe: true,
		editor: false,
		gray: false
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<ExpansionPanel defaultExpanded>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<div className={classes.column}>
							<Typography className={classes.heading}>Settings</Typography>
						</div>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails className={classes.details}>
						<div className={classes.column}>
							<FormControlLabel
								control={<Switch checked={this.state.safe} value="safe" color="secondary" />}
								onChange={this.handleChange("safe")}
								label="Safe Search"
							/>
						</div>
						<div className={classes.column}>
							<FormControlLabel
								control={
									<Switch
										checked={this.state.editor}
										onChange={this.handleChange("editor")}
										value="editor"
										color="secondary"
									/>
								}
								label="Editors Choice"
							/>
						</div>
						<div className={classes.column}>
							<FormControlLabel
								control={
									<Switch
										checked={this.state.gray}
										onChange={this.handleChange("gray")}
										value="gray"
										color="secondary"
									/>
								}
								label="Gray Scale"
							/>
						</div>

						<FormControl className={classes.formControl}>
							<Select
								value={10}
								onChange={this.handleChange}
								input={<Input name="age" id="age-helper" />}
							>
								<MenuItem value="{1}">
									<em>I'm Feeling Lucky</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<FormHelperText>Number of Search Results</FormHelperText>
						</FormControl>
					</ExpansionPanelDetails>
					<Divider />
					<ExpansionPanelActions>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</ExpansionPanelActions>
				</ExpansionPanel>
			</div>
		);
	}
}

DetailedExpansionPanel.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
