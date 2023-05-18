import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import contactImg from "../Image/contact.jpg"
import { Footer } from "../components/Footer"
import { ContactUs } from "../components/ContactUs"

export function Contact() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero-mid"
                heroImg={contactImg}
                title="Contact"
                btnClass="hide"
            />
            <ContactUs />
            <Footer />
        </>
    )
}