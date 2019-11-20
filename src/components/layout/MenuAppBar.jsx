import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CachedIcon from '@material-ui/icons/Cached';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const { refreshData } = props;
  const { t } = useTranslation();

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            {props.location.pathname === '/' ? t('RoadInfo') : t('FuelPrices')}
          </Typography>
          {props.location.pathname === '/' ? 
              <IconButton
                aria-label="Update Road Info"
                aria-controls="menu-appbar"
                aria-haspopup="false"
                onClick={refreshData}
                color="inherit"
              >
                <CachedIcon />
              </IconButton> : ''
              
           }
        </Toolbar>
      </AppBar>
    </div>
  );
}