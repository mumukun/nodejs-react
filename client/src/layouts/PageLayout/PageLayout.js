import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.less'
import {AppBar} from 'material-ui'
import LeftDrawer from '../../components/Layout/LeftDrawer';
import menuData from 'src/util/data'


class PageLayout extends React.Component {

  render() {
    return (
      <div className=''>
        <AppBar style={{boxShadow: "none"}}
                title=""
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <LeftDrawer navDrawerOpen={true}
                    menus={menuData.menus}
                    username="User Admin"/>


        <div className='page-layout__viewport container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
