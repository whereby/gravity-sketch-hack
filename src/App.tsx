import { useLocalMedia, useRoomConnection } from "@whereby.com/browser-sdk";

import Grid from "./components/Grid";

import "./App.css";

export type RoomConnectionRef = ReturnType<typeof useRoomConnection>;

function App() {
  const roomName =
    "https://funtimes.whereby.com/gs-p2p-test81e4f22c-dc75-47c0-b050-59c9aafc9c63";
  const localMedia = useLocalMedia({ audio: true, video: true });

  const roomConnection = useRoomConnection(roomName, {
    displayName: "Test",
    localMedia,
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
