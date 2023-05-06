import { EmailList } from './EmailList/index.js';

const container = document.querySelector('#app');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
    .then(res => res.json())
    .then(data => {
        container.innerHTML += EmailList({ emails: data.emails })
    })
