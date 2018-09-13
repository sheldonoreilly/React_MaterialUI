import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
	root: {
		width: "100%"
	},
	details: {
		alignItems: "center"
	},
	column: {
		flexBasis: "25%"
	}
});

class DetailedExpansionPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			safe: this.props.settings.safeSearch,
			editor: this.props.settings.editorsChoice,
			gray: this.props.settings.grayScale,
			resultAmt: this.props.settings.amount
		};
	}

	handleChange = name => event => {
		if (name === "resultAmt") {
			this.setState({ [name]: event.target.value });
		} else {
			this.setState({ [name]: event.target.checked });
		}
	};

	saveClick = e => {
		this.props.settingsChange(this.state);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<ExpansionPanel>
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
								value={this.state.resultAmt}
								onChange={this.handleChange("resultAmt")}
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
						<Button onClick={this.saveClick} size="small" color="primary">
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
