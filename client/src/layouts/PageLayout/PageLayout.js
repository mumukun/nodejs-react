import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.less'
import {AppBar} from 'material-ui';

export const PageLayout = ({children}) => (
  <div className=''>

    <div className='page-layout__viewport'>
      <AppBar style={{boxShadow: "none"}}
              title=""
              iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
