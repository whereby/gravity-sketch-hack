import { useState } from "react";

import VideoTile from "../VideoTile";
import { RoomConnectionRef } from "../../App";

import "./index.css";

interface GridProps {
  roomConnection: RoomConnectionRef;
}

const Grid = ({ roomConnection }: GridProps) => {
  const { state: roomState } = roomConnection;
  const { remoteParticipants, localParticipant } = roomState;
  console.log(roomState);

  const [tiles, setTiles] = useState([...remoteParticipants, localParticipant]);

  return (
    <div className="Grid">
      {tiles.map((participant) => {
        if (!participant) return null;

        const { id, stream, displayName } = participant;

        return <VideoTile key={id} stream={stream} name={displayName} />;
      })}
    </div>
  );
};

export default Grid;
