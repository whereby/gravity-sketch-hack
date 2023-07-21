import { useEffect, useState } from "react";

import VideoTile from "../VideoTile";
import { RoomConnectionRef } from "../../App";

import "./index.css";
import { useAtom } from "jotai";
import { participantListAtom } from "../../store";

interface GridProps {
  roomConnection: RoomConnectionRef;
}

const Grid = ({ roomConnection }: GridProps) => {
  const { state: roomState } = roomConnection;
  const { remoteParticipants, localParticipant } = roomState;
  const [participantList, setParticipantList] = useAtom(participantListAtom);
  const [cellLookup, setCellLookup] = useState<{
    [displayName: string]: number;
  }>({});
  const [tiles, setTiles] = useState([...remoteParticipants, localParticipant]);
  const CELL_COUNT = 8;

  useEffect(() => {
    setCellLookup((prev) => {
      const newLookup = {
        ...prev,
      };
      remoteParticipants.forEach((p) => {
        if (newLookup[p.displayName]) {
          return;
        }

        const max = Math.max(...Object.values(newLookup));
        let placement;

        if (isFinite(max)) {
          placement = max + 1;
        } else {
          placement = 0;
        }

        console.log(`Placement for ${p.displayName}: ${placement}`);
        if (placement > CELL_COUNT - 1) {
          return;
        }

        newLookup[p.displayName] = placement;
      });
      return newLookup;
    });
  }, [remoteParticipants, setCellLookup]);

  return (
    <div className="Grid">
      {tiles.map((participant) => {
        if (!participant) return null;

        const { id, stream, displayName } = participant;

        return (
          <div>
            <VideoTile key={id} stream={stream} name={displayName} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
