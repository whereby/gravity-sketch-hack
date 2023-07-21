import { useLocalMedia, useRoomConnection } from "@whereby.com/browser-sdk";

import "./App.css";

function App() {
  const roomName =
    "https://funtimes.whereby.com/gs-p2p-test81e4f22c-dc75-47c0-b050-59c9aafc9c63";
  const localMedia = useLocalMedia({ audio: true, video: true });

  const roomConnection = useRoomConnection(roomName, {
    displayName: "Test",
    localMedia,
  });

  const { state: roomState, components } = roomConnection;

  const { localParticipant, remoteParticipants, roomConnectionStatus } =
    roomState;
  const { VideoView } = components;

  let content;

  switch (roomConnectionStatus) {
    case "connecting":
      content = <div>Connecting...</div>;
      break;
    case "connected":
      content = (
        <div>
          <div>Connected!</div>
          <div>Local participant: {localParticipant?.displayName}</div>
          {remoteParticipants.map((participant) => {
            return participant.stream ? (
              <VideoView key={participant.id} stream={participant.stream} />
            ) : null;
          })}
        </div>
      );
      break;
  }

  return content;
}

export default App;
