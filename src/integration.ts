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
      const cellElement = document.getElementById(`cell-${p[1]}`);
      const rect = cellElement.getBoundingClientRect();

      console.log(cellElement);
      console.log(rect);

      const videoElement = document.getElementById(`video-${p[0]}`);
      const videoRect = videoElement.getBoundingClientRect();

      console.log(videoElement);
      console.log(videoRect);

      // Coordinates for 0,0 in the grid
      const xStart = (rect.left / window.innerWidth) * 100;
      const xEnd = (rect.right / window.innerWidth) * 100;
      const yStart = (rect.top / window.innerHeight) * 100;
      const yEnd = (videoRect.bottom / window.innerHeight) * 100;

      console.log(xStart, xEnd, yStart, yEnd);

      const percentageCoordinates = {
        x: `${xStart}, ${xEnd}`,
        y: `${yStart}, ${yEnd}`,
      };

      const posX = (rect.left / window.innerWidth) * 100;
      const sizeX = rect.width;
      const posY = (rect.top / window.innerHeight) * 100;
      const sizeY = rect.height; // this is the whole height of cell. change to just video?

      const pixelCoordinates = {
        posX,
        posY,
        sizeX,
        sizeY,
      };

      console.log(pixelCoordinates);

      return JSON.stringify(pixelCoordinates);
    }
  };
}
