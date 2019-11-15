import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2, 3),
		margin: '5px',
		backgroundColor: '#2c3c6f'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '10px'
    },
    date: {
        fontSize: '11px',
        color: '#fff',
        borderBottom: '1px solid #ccc',
        marginBottom: '10px'
	},
	content: {
		color: '#fff'
	}
}));

export default function Article(props) {
	const classes = useStyles();
	const { title, date, content } = props.article;

	return (
		<Paper className={classes.root}>
            <Typography component="div" className={classes.date}>
				{date}
			</Typography>
			<Typography component="div" className={classes.title}>
				{title}
			</Typography>
			<Typography component="p" className={classes.content}>
				{content}
			</Typography>
		</Paper>
	);
}
