import boardData from './boardData';
import dinnData from './dinnsData';

const getDataForDinnsView = () => new Promise((resolve, reject) => {
  dinnData.getDinns().then((dinnResponse) => {
    boardData.getBoards().then((boardResponse) => {
      const dinnStuff = [];
      dinnResponse.forEach((dinn) => {
        const boardObject = boardResponse.find((board) => board.firebaseKey === dinn.boardId);

        const boardUse = {
          boardName: boardObject.name,
        };

        dinnStuff.push({ ...dinn, ...boardUse });
        resolve(dinnStuff);
      });
    });
  }).catch((error) => reject(error));
});

export default { getDataForDinnsView };