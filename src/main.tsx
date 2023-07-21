import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "jotai";

import store, { participantListAtom } from "./store.ts";
import makeIntegration from "./integration.ts";

makeIntegration(store, participantListAtom);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
