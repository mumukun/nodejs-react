import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.less'
import {AppBar} from 'material-ui'
import Header from 'src/components/Layout/Header';
import LeftDrawer from 'src/components/Layout/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth'
import menuData from 'src/util/data'


class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let {navDrawerOpen} = this.state;
    const paddingLeftDrawerOpen = 250;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
        transition: "paddingLeft 2s"
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    }

    return (
      <div className=''>
        <Header styles={styles.header}
                handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>
        <LeftDrawer navDrawerOpen={navDrawerOpen}
                    menus={menuData.menus}
                    username="User Admin"/>

        <div className='page-layout__viewport container'  >
          {this.props.children}
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default withWidth()(PageLayout);
// export default PageLayout
