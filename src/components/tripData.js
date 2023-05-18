import "./tripStyles.css";

export function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.img1} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}