export const Email = (props) => {
    const { id, sender, subject, time, unread, body } = props;

    const emailEl = document.createElement('div')
    emailEl.classList.add('email')

    if (body) emailEl.classList.add('email--expand')

    emailEl.innerHTML = `
        <div class="email__head">
            <button class="email__icon ${unread ? "email__icon--closed" : "email__icon--opened"}"></button>
            <div class="email__info">
                <div class="email__sender">${sender.name}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body">${body}</div>
    `

    emailEl.querySelector('button').addEventListener('click', () => {
        if (!body) {
            fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    emailEl.replaceWith(
                        Email({ id, sender, subject, time, unread: false, body: data.body })
                    )
                });
        } else {
            emailEl.replaceWith(
                Email({ id, sender, subject, time, unread })
            )
        }
    })

    return emailEl
}
