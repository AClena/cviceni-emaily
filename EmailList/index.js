import { EmailItem } from '../EmailItem/index.js';

export const EmailList = (props) => {
  const { emails } = props

  return `
  <div id="read" class="inbox">
      <h2>Přečtené</h2>
      ${emails.filter(email => !email.unread).map(email => EmailItem(email)).join(' ')}
  </div>
  <div id="unread" class="inbox">
      <h2>Nepřečtené</h2>
      ${emails.filter(email => email.unread).map(email => EmailItem(email)).join(' ')}
  </div>
  `
}
