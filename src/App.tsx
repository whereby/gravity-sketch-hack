import { useLocalMedia, useRoomConnection } from "@whereby.com/browser-sdk";

import Grid from "./components/Grid";
import { useAtom } from "jotai";
import "./App.css";
import { isConnectedAtom } from "./store";
import { useEffect } from "react";
export type RoomConnectionRef = ReturnType<typeof useRoomConnection>;

function App({
  roomUrl,
  displayName,
}: {
  roomUrl: string;
  displayName: string;
}) {
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);
  const roomConnection = useRoomConnection(roomUrl, {
    displayName,
    localMediaConstraints: {
      video: true,
      audio: false,
    },
  });

  const { state: roomState } = roomConnection;
  const { roomConnectionStatus } = roomState;

  useEffect(() => {
    setIsConnected(roomConnectionStatus === "connected");
  }, [roomConnectionStatus]);

  return (
    <div>
      {isConnected ? (
        <Grid roomConnection={roomConnection} />
      ) : (
        <div>Connecting...</div>
      )}
    </div>
  );
}

export default App;
