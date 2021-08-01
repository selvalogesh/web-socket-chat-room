import SERVER_URL from '../config';
import socketClient from 'socket.io-client'
// console.log(SERVER_URL)

export const sockerIO = socketClient(SERVER_URL);

export default sockerIO