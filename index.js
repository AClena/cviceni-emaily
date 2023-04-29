const displayEmails = ((emails) => {
    const read = document.querySelector('#read')
    const unread = document.querySelector('#unread')
    
    unread.innerHTML += emails.map((email) => {
        if (email.unread) {
            return `<div class="email">
                <div class="email__head">
                    <button class="email__icon email__icon--closed"></button>
                    <div class="email__info">
                        <div class="email__sender">${email.sender.name}</div>
                        <div class="email__subject">${email.subject}</div>
                    </div>
                    <div class="email__time">${email.time}</div>
                </div>
                <div class="email__body"></div>
            </div>`
        }
    }).join(' ')

    read.innerHTML += emails.map((email) => {
        if (!email.unread) {
            return `<div class="email">
                <div class="email__head">
                    <button class="email__icon email__icon--opened"></button>
                    <div class="email__info">
                        <div class="email__sender">${email.sender.name}</div>
                        <div class="email__subject">${email.subject}</div>
                    </div>
                    <div class="email__time">${email.time}</div>
                </div>
                <div class="email__body"></div>
            </div>`
        }
    }).join(' ')
})

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
    .then(res => res.json())
    .then(data => displayEmails(data.emails))