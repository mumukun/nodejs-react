import React from 'react'
import PropTypes from 'prop-types'
import {Drawer, Avatar, MenuItem} from 'material-ui'
import {spacing, typography} from 'material-ui/styles'
import {white, blueGrey800,cyan500} from 'material-ui/styles/colors'
import {Link} from 'react-router'

const LeftDrawer = (props) => {
  let {navDrawerOpen} = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan500,
      paddingLeft: 40,
      height: 64,
    },
    menuItem: {
      color: blueGrey800,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: '',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: blueGrey800,
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
      <div style={styles.logo}>
        Material Admin
      </div>

      <div>
        {props.menus.map((menu, index) =>
          <MenuItem
            key={index}
            style={styles.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            containerElement={<Link to={menu.link}/>}
          />
        )}
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
