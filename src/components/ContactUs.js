import "./ContactUsStyles.css"

export function ContactUs() {
    return (
        <div className="form-container">
            <form>
                <h1>Send A Message To Us</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" rows="4" />
                <button>Send Message</button>
            </form>
        </div>
    )
}