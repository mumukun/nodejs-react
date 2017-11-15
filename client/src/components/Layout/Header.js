import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {AppBar, Menu} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {white} from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {styles, handleChangeRequestNavDrawer, ...other} = this.props;


    return (
      <div>

        <AppBar
          style={{...styles}}
          title={""}
          iconElementLeft={<IconButton style={{marginLeft:'15px'}}><NavigationMenu/></IconButton>}
          onClick={handleChangeRequestNavDrawer}

        />
      </div>
    );
  }
}


Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
