import React, {useEffect, useState} from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import '../styles/Home.css'

function Home() {

    const [images, setImages] = useState({});

    const header = {
        title: "HTML Image Gallery",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer " +
            "took a galley of type and scrambled it to make a type specimen book.",
        img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
    }

    const getImages = () => {
        fetch('json.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setImages(myJson)
            });
    }

    useEffect(() => {
        getImages()
    }, [])


    return (
        <div className={"home-wrapper"}>
            <Header header={header}/>
            <Gallery images={images}/>
        </div>
    );
}

export default Home;
