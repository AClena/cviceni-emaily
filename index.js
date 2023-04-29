const EmailItem = (props) => {
    const { unread, sender, subject, time } = props;

    return `<div class="email">
        <div class="email__head">
            <button class="email__icon ${unread ? "email__icon--closed" : "email__icon--opened"}"></button>
            <div class="email__info">
                <div class="email__sender">${sender.name}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body"></div>
    </div>`
}

const displayEmails = ((emails) => {
    const read = document.querySelector('#read')
    const unread = document.querySelector('#unread')
    
    unread.innerHTML += emails
        .filter(email => email.unread)
        .map(email => EmailItem(email))
        .join(' ')

    read.innerHTML += emails
        .filter(email => !email.unread)
        .map(email => EmailItem(email))
        .join(' ')
})

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
    .then(res => res.json())
    .then(data => displayEmails(data.emails))