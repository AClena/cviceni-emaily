export const EmailItem = (props) => {
  const { unread, sender, subject, time } = props;

  return `
  <div class="email">
      <div class="email__head">
          <button class="email__icon ${unread ? "email__icon--closed" : "email__icon--opened"}"></button>
          <div class="email__info">
              <div class="email__sender">${sender.name}</div>
              <div class="email__subject">${subject}</div>
          </div>
          <div class="email__time">${time}</div>
      </div>
      <div class="email__body"></div>
  </div>
  `
}
