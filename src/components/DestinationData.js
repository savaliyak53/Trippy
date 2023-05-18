import "./DestinationStyles.css";

import React from "react"

export class DestinationData extends React.Component {
    render() {
        return (
            <>
                <div className={this.props.cName}>
                    <div className="des-text">
                        <h2>{this.props.heading} </h2>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="image">
                        <img alt='image' src={this.props.img1}></img>
                        <img alt='image' src={this.props.img2}></img>
                    </div>
                </div>
            </>
        )
    }
}
