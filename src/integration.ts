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
      return JSON.stringify(new Date());
    } else {
      const cellElement = document.getElementById(`cell-${p[1]}`);
      const rect = cellElement.getBoundingClientRect();

      console.log(cellElement);
      console.log(rect);

      const videoElement = document.getElementById(`video-${p[0]}`);
      const videoRect = videoElement.getBoundingClientRect();

      console.log(videoElement);
      console.log(videoRect);

      const posX = rect.left / window.innerWidth;
      const sizeX = rect.width / window.innerWidth;
      const posY = rect.top / window.innerHeight;
      const sizeY = videoRect.height / window.innerHeight; // this is the whole height of cell. change to just video?

      const percentageCoordinates = {
        posX,
        posY,
        sizeX,
        sizeY,
        displayName,
      };

      console.log(percentageCoordinates);

      return JSON.stringify(percentageCoordinates);
    }
  };
}
