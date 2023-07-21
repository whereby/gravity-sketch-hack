declare global {
  interface Window {
    getGsCoordsForParticipant: (displayName: string) => string;
  }
}

// eslint-disable-next-line
export default function (store: any, participantListAtom: any) {
  window.getGsCoordsForParticipant = function (displayName) {
    const participantList = store.get(participantListAtom);
    const p = participantList.find((p) => p.name === displayName);
    console.log(participantList);
    if (!p) {
      return JSON.stringify(false);
    } else {
      return JSON.stringify({ originX: 2, originY: 2, widt: 200, height: 200 });
    }
  };
}
