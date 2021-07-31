
import socketClient from 'socket.io-client'
const SERVER = "wss://";

export const sockerIO = socketClient(SERVER);

export default sockerIO