import React from "react";
import '../styles/Header.css'

function Header(props) {

    const {header: {title, description, img}} = props

    return (
        <section className={"header-wrapper"} style={{background: `url(${img})`, backgroundSize: `cover`}}>
            <div className={"header-section"}>
                <div className={"h-container"}>
                    <h1 className={"h-title"}>
                        {title}
                    </h1>
                    <article className={"h-description"}>
                        <p className={"h-paragraph"}> {description} </p>
                        <button className={"btn download-btn"}>Download Gallery</button>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Header;
