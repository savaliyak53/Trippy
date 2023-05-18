import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import aboutImg from "../Image/about.jpg"
import { Footer } from "../components/Footer"
import { AboutUs } from "../components/AboutUs"

export function About() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero-mid"
                heroImg={aboutImg}
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}