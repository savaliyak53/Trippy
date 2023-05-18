import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import aboutImg from "../Image/about.jpg"
import { Footer } from "../components/Footer"
import { Trip } from "../components/trip"

export function Service() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero-mid"
                heroImg={aboutImg}
                title="Service"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}