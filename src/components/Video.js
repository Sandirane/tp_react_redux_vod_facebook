import React from 'react';
import { Player } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import './Video.css';

//mise en place du player

const Video = () => (
  <center>
<div className='video-box'>
  <Player>
    <source src='http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4' />
    <track label='English' kind='subtitles' srcLang='en' default='' />
  </Player>
</div>
  </center>
);

export default Video;
