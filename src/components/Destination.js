import mountain1 from '../Image/mountain1.jpeg';
import mountain2 from '../Image/mountain2.webp';
import mountain3 from '../Image/mountain3.jpg';
import mountain4 from '../Image/mountain4.jpeg';
import { DestinationData } from './DestinationData';
import './DestinationStyles.css'

export const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame</p>
            <DestinationData
                cName={"first-des"}
                heading="Taal Valcano,Batangas"
                text="Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake
                Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with"
                img1={mountain1}
                img2={mountain2}
            />

            <DestinationData
                cName={"second-des"}
                heading="Mt Danguldul,Batangas"
                text="Batangas is one of the most popular tourist destinations near Metro Manila. It is home to the well-known Taal Volcano, one of the Decade Volcanoes, and Taal Heritage town, a small town that has ancestral houses and structures dating back to the 19th century.Batangas first came to be known as Bonbon. It was named after the mystical and fascinating Taal Lake, which was also originally called Bonbon. Some of the earliest settlements in Batangas were established at the vicinity of Taal Lake. In 1534, Batangas became the first practically organized Batangas is one of the most popular tourist destinations near Metro Manila. It is home to the well-known Taal Volcano, one of the Decade Volcanoes, and Taal Heritage town, a small town that has ancestral houses and structures dating back to the 19th century.Batangas first came to be known as Bonbon. It was named after the mystical and fascinating Taal Lake, which was also originally called Bonbon."
                img1={mountain3}
                img2={mountain4}
            />
        </div>
    )
}