import React from 'react'
import PropTypes from 'prop-types'
import HLSPlayer from './HLSPlayer'


export default class Counter extends React.Component{
  render(){
    return (
      <div style={{ margin: '0 auto' }} >
        <div>
          <div>asfdasfas</div>
          <HLSPlayer></HLSPlayer>
        </div>
      </div>
    )
  }
}
 
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}
