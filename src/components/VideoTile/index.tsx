import React from "react";

import { VideoView } from "@whereby.com/browser-sdk";

import "./index.css";

interface VideoTileProps {
  id?: string;
  name?: string;
  stream: MediaStream | undefined;
}

const VideoTile = ({ id, name, stream }: VideoTileProps) => {
  return (
    <div className="VideoTile">
      {stream ? (
        <VideoView
          id={`video-${name}`}
          key={id}
          stream={stream}
          width={"100%"}
        />
      ) : (
        <div>
          <p>no stream</p>
        </div>
      )}
      <div className="VideoTile__name">{name}</div>
    </div>
  );
};

export default VideoTile;
