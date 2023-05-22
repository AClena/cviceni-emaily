import { EmailSection } from './EmailSection/index.js';

document
    .querySelector('#app')
    .append(
        EmailSection({ heading: 'Přečtené', folder: 'read' }),
        EmailSection({ heading: 'Nepřečtené', folder: 'unread' })
    );
