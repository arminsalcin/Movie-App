import React from 'react';
import YouTube from 'react-youtube';

interface IVideoPlayerProps {
  videoId: string;
}

interface IVideoEvent {
  target: any;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoId }) => {
  const config = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 0 as 0,
      enablejsapi: 1 as 1,
    },
  };
  const _onReady = (event: IVideoEvent): void => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div>
      {videoId && (
        <YouTube videoId={videoId} opts={config} onReady={_onReady} />
      )}
    </div>
  );
};

export default VideoPlayer;
