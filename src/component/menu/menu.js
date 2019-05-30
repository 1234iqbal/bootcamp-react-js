import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/">
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </Link>
      <Link to="/about">
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </Link>
      <Link to="/add">
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </Link>
    </BottomNavigation>
  );
}

export default Menu;
