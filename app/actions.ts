'use server'

const TELEGRAM_BOT_TOKEN = '7683832373:AAHow58-LqQ0dO25OUE3dyoRbohHmkBSZxU';
const TELEGRAM_CHAT_ID = '5905098867';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        return { success: false, message: 'Please fill in all fields.' };
    }

    const text = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Message: ${message}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error sending message:', error);
        return { success: false, message: 'Failed to send message. Please try again later.' };
    }
}
