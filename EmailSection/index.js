import { Email } from '../Email/index.js';

export const EmailSection = (props) => {
  const { heading, emails, folder } = props;

  const inbox = document.createElement('div')
  inbox.classList.add('inbox')
  inbox.innerHTML = `<h2>${heading}</h2>`

  if (!emails) {
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/?folder=${folder}`)
      .then((response) => response.json())
      .then((data) => {
        inbox.replaceWith(
          EmailSection({ heading, emails: data.emails })
        )
    });
  } else {
    const emailEls = emails.map((email) => Email(email))
    inbox.append(...emailEls)
  }

  return inbox
}
