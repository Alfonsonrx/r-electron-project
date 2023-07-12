import { contextBridge, ipcRenderer } from "electron";

function setIpc () {
  ipcRenderer.on('pong', (event, arg) => {
      console.log(`pong recibido en el frontend \n${arg}`);
  })
}

function sendIpc () {
  console.log('sendIpc')

  ipcRenderer.send('ping', new Date());
}

module.exports={
  setIpc: setIpc,
  sendIpc: sendIpc
}