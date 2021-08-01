const socket = io('wss://');

let handleSend = (e) => {
    const text = document.querySelector('input').value;
    const data = text.split('~')
    if(data.length < 2 || data[0] === '') {
        data[0] = "anonymous"
        data[1] = text
    }
    data.length == 2 && socket.emit('message', {name:data[0], text:data[1]})
    document.querySelector('input').value = '';
};


socket.on('message', data => {
    console.log(data)
    const el = document.createElement('li');
    el.innerHTML = data['name']+": "+data['text'];
    document.querySelector('ul').appendChild(el)

});

document.querySelector('input')
    .addEventListener('keyup', (event) => {
        event.code === 'Enter' && handleSend(event)
    });


document.querySelector('button').onclick = handleSend



// Regular Websockets

// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }