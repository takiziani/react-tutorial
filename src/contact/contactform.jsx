export default function ContactForm() {
    return (
        <form>
            <h2>Contact Us</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};