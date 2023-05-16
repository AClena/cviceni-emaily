import { Email } from '../Email/index.js';

export const EmailSection = (props) => {
  const { heading, emails, folder } = props;

  const inbox = document.createElement('div')
  inbox.classList.add('inbox')
  inbox.innerHTML = `<h2>${heading}</h2>`

  if (emails === 'loading') {
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/?folder=${folder}`)
      .then((response) => response.json())
      .then((data) => {
        inbox.replaceWith(
          EmailSection({ heading, emails: data.emails })
        )
    });
  } else {
    const emailEls = emails.map((email) => Email({
      id: email.id, 
      senderName: email.sender.name, 
      subject: email.subject, 
      time: email.time, 
      unread: email.unread
    }))
    inbox.append(...emailEls)
  }

  return inbox
}
