import React from "react";
import '../styles/Header.css'

function Header(props) {
    const {header: {title, description, img}} = props

    return (
        <section className={"header-section"} style={{background: `url(${img})`, backgroundSize: `cover`}}>
            <div className={"header-section-container"}>
                <div className={"h-s-c-description"}>
                    <h1 className={"description-title"}>
                        {title}
                    </h1>
                    <article className={"description-subtitle"}>
                        <p className={"d-s-paragraph"}> {description} </p>
                        <button className={"btn download-btn"}>Download Gallery</button>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Header;
