import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Container,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography
} from "@material-ui/core/";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
}));

export default function Fuels() {
	const classes = useStyles();
	const [fuel, setFuels] = useState({});

	useEffect(() => {
		const api =
			"https://stamenov.s3-eu-west-1.amazonaws.com/fuelsInfo.json";
		function getFuels() {
			return fetch(api)
				.then(res => res.json())
				.then(fuel => setFuels(fuel))
				.catch(error => console.error(error));
		}

		getFuels();

		return function cleanup() {
			//setFuels({});
		};
	}, []);

	const fuelKeys = Object.keys(fuel);
	let dateStamp = "";

	let fuelList = fuelKeys.map((f, i) => (
		<ListItem key={JSON.parse(fuel[f]).fuel}>
			<ListItemAvatar>
				<Avatar>
					<LocalGasStationIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={JSON.parse(fuel[f]).fuel}
				secondary={
					JSON.parse(fuel[f]).price + JSON.parse(fuel[f]).dimension
				}
			/>
		</ListItem>
	));

	if (fuel[0]) {
		dateStamp = JSON.parse(fuel[0]).date;
	}

	return (
		<>
			<Container>
				<Typography variant="h5">Дата: {dateStamp}</Typography>
			</Container>
			<List className={classes.root}>{fuelList}</List>
		</>
	);
}
