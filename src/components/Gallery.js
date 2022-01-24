import '../styles/Gallery.css'
import React, {useState, useEffect} from "react";
import ImagePreview from "./ImagePreview";

function Gallery(props) {

    const {images} = props
    const [currentSelectedKeyWord, setCurrentSelectedKeyWord] = useState(undefined);
    const [currentSelectedImages, setCurrentSelectedImages] = useState([]);
    const [selectedImagePreview, setSelectedImagePreview] = useState(undefined);

    const getKeywordImages = (keyword) => {
        if (keyword === undefined) {
            setCurrentSelectedImages([].concat.apply([], Object.values(images)))
        } else {
            setCurrentSelectedImages(images[keyword])
        }
        setCurrentSelectedKeyWord(keyword)
    }

    const setPreviewImage = (image) => {
        setSelectedImagePreview(image)
    }

    useEffect(() => {
        getKeywordImages()
    }, [images])

    return (
        <section className={"gallery-wrapper"}>
            <div className={"g-container"}>
                <h2 className={"g-title"}>Put in use some tags</h2>
                <div className={"g-buttons-container"}>
                    <button
                        className={`btn filter-button ${currentSelectedKeyWord === undefined ? "activeButton" : ""}`}
                        onClick={() => getKeywordImages()}>all
                    </button>
                    {Object.entries(images).map((key, index) => {
                        return (
                            <button
                                className={`btn filter-button ${currentSelectedKeyWord === key[0] ? "activeButton" : ""}`}
                                onClick={() => getKeywordImages(key[0])}> {key[0]}
                            </button>
                        )
                    })}
                </div>
                <div className={"g-images-wrapper"}>
                    {currentSelectedImages.length !== 0 ?
                        currentSelectedImages.map((item, key) => {
                            return (
                                <div className={"g-image-container"}
                                     onClick={() => setPreviewImage(item.images.big)}>
                                    <img
                                        src={item.images.small}
                                        key={key}
                                        alt={"img"}
                                        className={"g-image"}
                                    />
                                    <div className={"g-image-hover"}><img src={"/images/Search_Icon.svg"}/></div>
                                </div>)
                        }) : <></>
                    }
                </div>
            </div>
            {selectedImagePreview !== undefined
                ? <ImagePreview imageUrl={selectedImagePreview} closeAction={setPreviewImage}/>
                : <></>}
        </section>
    );
}

export default Gallery;
