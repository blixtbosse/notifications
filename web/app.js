window.addEventListener('message', e => createNotification(e.data));

const colors = {
    '~r~': 'red',
    '~lr~': '#CD5C5C',
    '~g~': 'green',
    '~lg~': 'lightgreen',
    '~y~': 'rgb(255, 255, 157)',
    '~b~': 'blue',
    '~lb~': 'lightblue',
    '~p~': '#4B0082',
    '~lp~': '#E6E6FA',
    '~o~': 'orange',
    '~lo~': '#FFDAB9'
}

function createNotification(data) {
    const element = document.createElement('div');
    const container = document.getElementById('container');

    element.classList.add('notification');
    element.style.opacity = "0.0";

    if (data.text) {
        for (color in colors) {
            if (data.text.includes(color)) {
                msgArr = []
                msgArr[color] = `<span style='color: ${colors[color]}'>`
                msgArr['~s~'] = `</span>`
    
                for (let id in msgArr) {
                    data.text = data.text.replace(new RegExp(id, "g"), msgArr[id])
                }
            }
        }
    }

    const text = document.createElement('p');
    text.innerHTML = data.text ? data.text : 'Notifikation';

    const icon = document.createElement('span');
    icon.classList.add('material-icons-outlined');

    icon.style.color = data.color ? data.color : 'white';
    icon.innerText = data.icon ? data.icon + '_outlined' : 'error_outlined';

    element.appendChild(icon);
    element.appendChild(text);

    container.append(element);

    fadeIn(element);
    setTimeout(() => element.remove(), data.timeout ? data.timeout : 3000);
}

function fadeIn(element) {
    if (element.style.opacity !== "1.0") {
        let i = 0; setInterval(() => element.style.opacity = i++ / 10, 30);
    }
}
