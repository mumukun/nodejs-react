import React from 'react';
import {Player} from 'video-react';
import HLSSource from './HLSSource';
import "video-react/dist/video-react.css";


export default class HLSPlayer extends React.Component {
  render() {
    return (
      <Player>
        <HLSSource
          isVideoChild
          src="http://60.167.58.28:8080/hls/vomont/2_1_1.m3u8"
        />
      </Player>
    )
  }
}
