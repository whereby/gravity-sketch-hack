import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "jotai";

import store, { participantListAtom } from "./store.ts";
import makeIntegration from "./integration.ts";

makeIntegration(store, participantListAtom);

const urlParams = new URLSearchParams(window.location.search);
const roomUrl = urlParams.get("roomUrl") || "";
const displayName = urlParams.get("displayName") || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App roomUrl={roomUrl} displayName={displayName} />
  </Provider>
);
