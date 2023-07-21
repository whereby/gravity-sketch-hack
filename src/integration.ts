declare global {
  interface Window {
    getGsCoordsForParticipant: (displayName: string) => string;
  }
}

// eslint-disable-next-line
export default function (store: any, participantListAtom: any) {
  window.getGsCoordsForParticipant = function (displayName) {
    const participantList = store.get(participantListAtom);
    const p = participantList[0];
    console.log(participantList);
    if (!p) {
      return JSON.stringify(false);
    } else {
      const cellElement = document.getElementById(`cell-${p[1]}`);
      const rect = cellElement.getBoundingClientRect();

      console.log(cellElement);
      console.log(rect);

      const videoElement = document.getElementById(`video-${p[0]}`);
      const videoRect = videoElement.getBoundingClientRect();

      console.log(videoElement);
      console.log(videoRect);

      // Coordinates for 0,0 in the grid
      const xStart = rect.left / window.innerWidth;
      const xEnd = rect.right / window.innerWidth;
      const yStart = rect.top / window.innerHeight;
      const yEnd = videoRect.bottom / window.innerHeight;

      console.log(xStart, xEnd, yStart, yEnd);

      const percentageCoordinates = {
        x: `${xStart}, ${xEnd}`,
        y: `${yStart}, ${yEnd}`,
      };

      const posX = rect.left / window.innerWidth;
      const sizeX = rect.width / window.innerWidth;
      const posY = rect.top / window.innerHeight;
      const sizeY = videoRect.height / window.innerHeight; // this is the whole height of cell. change to just video?

      const pixelCoordinates = {
        posX,
        posY,
        sizeX,
        sizeY,
        displayName,
      };

      console.log(pixelCoordinates);

      return JSON.stringify(pixelCoordinates);
    }
  };
}
