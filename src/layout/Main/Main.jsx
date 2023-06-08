import React from "react";
import { Link } from "react-router-dom";
import "../Main/main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Actus from "../Actus/Actus";
import DcComics from "../DC-comics/DcComics";
import Marvel from "../Marvel/Marvel";
import BonsPlans from "../BonsPlans/BonsPlans";

import imgActuCarousel from "../../images/deco-MDC-Comics/dc marvel.png";
import imgMarvelCarousel from "../../images/deco-MDC-Comics/heros marvel complet.jpg";
import imgDccomicsCarousel from "../../images/deco-MDC-Comics/heros DC comics complet.jpg";
import imgBonplanCarousel from "../../images/deco-MDC-Comics/heros dc-marvel bon plans.jpg";
import imgHistDcComics from "../../images/deco-MDC-Comics/logo-DC.jpg";
import imgHistMarvel from "../../images/deco-MDC-Comics/logo-marvel-fond-rouge.jpg";

const Main = () => {

  return (

        <div>
            <br></br>
            {/* Carousel */}
            <div className="container">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="title carousel-inner">
                        <div className="carousel-item active">
                            <h2>Actualites</h2>
                            <img src={imgActuCarousel} alt="CarouselActualités"/>
                        </div>
                        <div className="carousel-item">
                            <h2>Marvel</h2>
                            <img src={imgMarvelCarousel} alt="CarouselMarvel"/>
                        </div>
                        <div className="carousel-item">
                            <h2>DC Comics</h2>
                            <img src={imgDccomicsCarousel} alt="CarouselDcComics"/>
                        </div>
                        <div className="carousel-item">
                            <h2>Bons Plans</h2>
                            <img src={imgBonplanCarousel} alt="CarouselBonPlan"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* MDC Comics */}
            <div className="container col-12">
                <div className=" container row justify-content-center">
                    <div className="col-12 text-center">
                        <h3>MDC Comics</h3>
                        <p><strong>"Le Meilleur de l'Univers DC Comics et Marvel reunis"</strong></p>
                        <p><strong>MDC Comics</strong> à pour vocation de réunir les différents super-heros des Univers Marvel et DC Comics en un seul endroits: Comics, Biographie, Actualités, Bons Plans...etc...<br></br>
                        Vous ne raterez rien de vos super heros préférez! et peut etre en découvrirez vous d'autre....</p>
                    </div>
                    <div className="hist-dc-comics row col-12 col-md-6 justify-content-center">
                        <img src={imgHistDcComics} alt="HistoireDcComics"/>
                        <h4>DC Comics</h4>
                        <p>
                        DC Comics est l'une des principales maisons d’édition américaines de comics, les initiales « DC » sont une abréviation de « Detective Comics »...</p>
                    </div>
                    <div className="hist-marvel row col-12 col-md-6 justify-content-center">
                        <img src={imgHistMarvel} alt="HistoireMarvel"/>
                        <h4>MARVEL</h4>
                        <p>Marvel Worldwide Inc., plus communément appelé Marvel Comics ou simplement Marvel, est une subdivision de Marvel Entertainment et l'une des principales maisons d'édition américaines de comics...</p>
                    </div>
                    <div className="history container row col-12 justify-content-around">
                        <Link to="https://fr.wikipedia.org/wiki/DC_Comics" className="DC btn btn-primary" href="/" role="button" target="_blank">HISTOIRE  DE  DC</Link>
                        <Link to="https://fr.wikipedia.org/wiki/Marvel_Comics#:~:text=Martin%20Goodman%20fonde%20la%20soci%C3%A9t%C3%A9,aussi%20pl%C3%A9biscit%C3%A9%20par%20les%20lecteurs." className="Marvel btn btn-primary" href="/" role="button" target="_blank">HISTOIRE  DE  MARVEL</Link>
                    </div>
                </div>
            </div>
        <>
            <Actus/>
            <DcComics/>
            <Marvel/>
            <BonsPlans/>
        </>
        </div>
       
    );
};

export default Main;