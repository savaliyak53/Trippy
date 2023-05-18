import { Destination } from "../components/Destination";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"
import { Trip } from "../components/trip";
import home from "../Image/home.jpg";


export function Home() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                heroImg={home}
                title="Your Journey Your Story"
                text="Choose Your Fevourite Destination"
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer/>
        </>
    )
}