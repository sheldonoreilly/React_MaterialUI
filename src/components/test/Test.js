import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

const TestComponent = () => {
	return (
		<div>
			<TextField placeholder="Placeholder here" label="Basic TextField" />
			<Button variant="fab" color="primary" onClick={console.log("click")}>
				<Icon>location_on</Icon>
				Find me
			</Button>
		</div>
	);
};

export default TestComponent;
