import '../styles/Gallery.css'
import React, {useState, useEffect} from "react";
import ImagePreview from "./ImagePreview";

function Gallery(props) {
    const {images} = props
    const [currentSelectedKeyWord, setCurrentSelectedKeyWord] = useState(undefined);
    const [currentSelectedImages, setCurrentSelectedImages] = useState([]);
    const [selectedImagePreview, setSelectedImagePreview] = useState(undefined);

    const getKeywordImages = (keyword) => {
        keyword === undefined
            ? setCurrentSelectedImages([].concat.apply([], Object.values(images)))
            : setCurrentSelectedImages(images[keyword]);

        setCurrentSelectedKeyWord(keyword)
    }

    const setPreviewImage = (image) => {
        setSelectedImagePreview(image)
        selectedImagePreview === undefined
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "visible";
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
                    {Object.entries(images).map((item, index) => {
                        return (
                            <button
                                className={`btn filter-button ${currentSelectedKeyWord === item[0] ? "activeButton" : ""}`}
                                onClick={() => getKeywordImages(item[0])}> {item[0]}
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
                                    <div className={"g-image-hover"}><img src={"/imageGallery/images/Search_Icon.svg"}/></div>
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
