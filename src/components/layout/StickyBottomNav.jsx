import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TrafficIcon from "@material-ui/icons/Traffic";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0
	}
});
const useStylesAction = makeStyles({
	root: {
		fontSize: "10px!important"
	},
	label: {
		fontSize: "11px!important"
	},
	selected: {
		fontSize: "11px!important"
	}
});

function StickyBottomNav(props) {
	const classes = useStyles();
	const classesAction = useStylesAction();
	const [value, setValue] = useState(0);
	const { history } = props;

	const roadInfo = () => {
		history.push("/");
	};

	const fuelPrices = () => {
		history.push("/fuels");
	};

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			classes={{ root: classes.root }}
		>
			<BottomNavigationAction
				label="Пътна обстановка"
				icon={<TrafficIcon />}
				onClick={roadInfo}
				classes={{ selected: classesAction.selected, label: classesAction.label }}
			/>
			<BottomNavigationAction
				label="Цени на горива"
				icon={<LocalGasStationIcon />}
				onClick={fuelPrices}
				classes={{ selected: classesAction.selected, label: classesAction.label }}
			/>
			<BottomNavigationAction
				label="Новини"
				icon={<AnnouncementIcon />}
				classes={{ selected: classesAction.selected, label: classesAction.label }}
			/>
		</BottomNavigation>
	);
}

export default withRouter(StickyBottomNav);
