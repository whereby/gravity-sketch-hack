import { useState, useEffect } from "react";
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

  const { state: roomState } = roomConnection;

  const { localParticipant, remoteParticipants, roomConnectionStatus } =
    roomState;

  let content;

  useEffect(() => {
    console.log("roomConnectionStatus", roomConnectionStatus);
  }, [roomConnectionStatus]);

  console.log(remoteParticipants);

  useEffect(() => {
    console.log("remoteParticipants", remoteParticipants);
  }, [remoteParticipants]);

  switch (roomConnectionStatus) {
    case "connecting":
      content = <div>Connecting...</div>;
      break;
    case "connected":
      content = (
        <div>
          <div>Connected!</div>
          <div>Local participant: {localParticipant?.displayName}</div>
          <div>Remote participants: {remoteParticipants.length}</div>
        </div>
      );
      break;
  }

  return content;
}

export default App;
