import React from 'react'
import {AppBar} from 'material-ui';
import './HomeView.less'


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={"slogan"}>
          <div style={{margin: "16px auto 0px auto", textAlign: "center", maxWidth: "575px", color: "#fff"}}>
            <h1>欢迎 welcome</h1>
            <h2 style={{fontWeight: '300'}}>nice to meet you</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
