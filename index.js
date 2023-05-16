import { EmailSection } from './EmailSection/index.js';

document.querySelector('#app').append(
    EmailSection({ 
        heading: 'Přečtené', 
        emails: 'loading', 
        folder: 'read' 
    }),
    EmailSection({ 
        heading: 'Nepřečtené', 
        emails: 'loading', 
        folder: 'unread' 
    })
)
