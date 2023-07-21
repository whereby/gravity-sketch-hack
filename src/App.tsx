import { useState } from "react";
import { useRoomConnection } from "@whereby.com/browser-sdk";

import "./App.css";

function App() {
  const roomName =
    "https://funtimes.whereby.com/gs-stable-canvas8fad2b29-c7d7-4ea9-909b-4428c2d5c958";

  const roomConnection = useRoomConnection(roomName, {
    displayName: "Test",
    localMediaConstraints: {
      audio: true,
      video: true,
    },
  });

  const { state: roomState } = roomConnection;

  console.log(roomState);
  return <div>heehe</div>;
}

export default App;
