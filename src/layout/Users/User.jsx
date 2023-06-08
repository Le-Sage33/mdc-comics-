import React, {} from 'react';
import { Link } from "react-router-dom";
import "./user.css"
import imgHistDcComics from "../../images/deco-MDC-Comics/logo-DC.jpg";
import imgHistMarvel from "../../images/deco-MDC-Comics/logo-marvel-fond-rouge.jpg";





const User = () => {
  
    return (
      <>
        
            <div className="container col-12">  
                <div className=" row justify-content-center">
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
                <li>
                    <Link to="/comics_books">Liste des Comics</Link>
                </li>
            </div>
        </>
    );
  };
  
  export default User;