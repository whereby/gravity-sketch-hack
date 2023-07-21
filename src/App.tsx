import { useLocalMedia, useRoomConnection } from "@whereby.com/browser-sdk";

import Grid from "./components/Grid";

import "./App.css";

export type RoomConnectionRef = ReturnType<typeof useRoomConnection>;

function App({
  roomUrl,
  displayName,
}: {
  roomUrl: string;
  displayName: string;
}) {
  const localMedia = useLocalMedia({ audio: true, video: true });

  const roomConnection = useRoomConnection(roomUrl, {
    displayName,
    localMediaConstraints: {
      video: true,
      audio: false,
    },
  });

  const { state: roomState } = roomConnection;
  const { roomConnectionStatus } = roomState;

  const isConnected = roomConnectionStatus === "connected";

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
