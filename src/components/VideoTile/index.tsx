import React from "react";
import { VideoView } from "@whereby.com/browser-sdk";

interface VideoTileProps {
  id?: string;
  name?: string;
  stream: MediaStream | undefined;
}

const VideoTile = ({ id, name, stream }: VideoTileProps) => {
  return (
    <div>
      {stream ? (
        <VideoView key={id} stream={stream} />
      ) : (
        <div>
          <p>no stream</p>
        </div>
      )}
      <span>{name}</span>
    </div>
  );
};

export default VideoTile;
