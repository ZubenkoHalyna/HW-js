let ul = document.createElement('ul');
let sessionList = JSON.parse(localStorage.getItem('sessions-list')) || [];
for (let item of sessionList) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);