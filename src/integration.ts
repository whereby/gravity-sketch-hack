declare global {
  interface Window {
    getGsCoordsForParticipant: (displayName: string) => string;
  }
}

export default function (store: any) {
  window.getGsCoordsForParticipant = function () {
    return JSON.stringify(store.get("participant") || "");
  };
}
