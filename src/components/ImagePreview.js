import React from "react";
import '../styles/ImagePreview.css';

function ImagePreview(props) {
    const {imageUrl, closeAction} = props;

    return (
        <section className={"image-preview-section"}>
                <div className={"i-p-container"}>
                    <figure className={"i-p-container-figure"}>
                        <img src={imageUrl}/>
                    </figure>
                    <div className={"close-symbol-container"} onClick={() => closeAction(undefined)}>X</div>
                </div>
        </section>
    );
}

export default ImagePreview;
