import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import {Loading} from '../../public/components/Loading';

export const PageLayout = ({children}) => (
  <div className='container'>
    <div className='page-layout__viewport'>
      {children}
    </div>
    <Loading/>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
