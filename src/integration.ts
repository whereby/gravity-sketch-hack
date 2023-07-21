declare global {
  interface Window {
    getGsCoordsForParticipant: (displayName: string) => string;
  }
}

// eslint-disable-next-line
export default function (store: any, participantListAtom: any) {
  window.getGsCoordsForParticipant = function (displayName) {
    const participantList = store.get(participantListAtom);
    const p = participantList.find((p) => p[0] === displayName);
    console.log(participantList);
    if (!p) {
      return JSON.stringify(false);
    } else {
      const el = document.getElementById(`cell-${p[1]}`);
      const rect = el.getBoundingClientRect();
      const pct = (window.innerHeight - rect.top) / window.innerHeight;
      console.log(pct);
      console.log(rect);
    }
  };
}
