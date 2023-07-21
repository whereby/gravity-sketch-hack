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

      console.log(rect);
      console.log(pct);
      // Coordinates for 0,0 in the grid
      const xStart = (rect.left / window.innerWidth) * 100;
      const xEnd = (rect.right / window.innerWidth) * 100;
      const yStart = (rect.top / window.innerHeight) * 100;
      const yEnd = (rect.bottom / window.innerHeight) * 100;

      console.log(xStart, xEnd, yStart, yEnd);

      const percentageCoordinates = {
        x: `${xStart}, ${xEnd}`,
        y: `${yStart}, ${yEnd}`,
      };

      console.log(percentageCoordinates);

      return JSON.stringify(rect);
    }
  };
}
