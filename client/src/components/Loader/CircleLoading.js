import React, {Component} from 'react'
import './CircleLoading.less'
export default class CircleLoading extends Component {

  render () {
    return (
      <div id='loading' className='hide'>
        <div id='circularG'>
          <div id='circularG_1' className='circularG' />
          <div id='circularG_2' className='circularG' />
          <div id='circularG_3' className='circularG' />
          <div id='circularG_4' className='circularG' />
          <div id='circularG_5' className='circularG' />
          <div id='circularG_6' className='circularG' />
          <div id='circularG_7' className='circularG' />
          <div id='circularG_8' className='circularG' />
        </div>
      </div>
    )
  }

  static busy () {
    document.getElementById('loading').className = ''
  }

  static idle () {
    document.getElementById('loading').className = 'hide'
  }
}
