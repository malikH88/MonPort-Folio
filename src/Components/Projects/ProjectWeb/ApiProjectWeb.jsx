import React from 'react';
import Tabs from './TabProjectWeb';
import Paradise from '../../../Files/image/Paradise.png';
import ARW from '../../../Files/image/Around_The_World.png';
import Book from '../../../Files/image/Wild_book.png';

class ApiProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WildBook: {
        title: "Wild Book | Wild Code School :",
        resume:
          "Réalisé du 9 mars au 27 mars 2020. Le projet avait pour but de créer une page web statique qui faisait découvrir la promotion 2020 des élèves de la Wild, réalisé avec une équipe de 3 personnes, à l’aide des langages tels que HTLM5, CSS3, ainsi que l’utilisation de l’environnement GITHUB, Linux.",
        image: <img className='Preview_Project' src={Book} alt="WildBook_Preview"/>,  
        link: <a href="https://wild-book.netlify.app/">WildBook Netlify</a>   
      },
      Hackathon: {
        title: "Hackathon 32h | Wild Code School :",
        resume:
          "Le Hackathon avait pour but d’utiliser une Api de Webcam puis en faire une application web de notre choix, réalisé avec une équipe de 3 personnes, à l’aide des langages tels que JavaScript, Jsx, ainsi que l’utilisation du Framework React-Strap.",
        image: <img className='Preview_Project' src={ARW} alt="Hackathon_Preview"/>, 
        link: <a href="https://around-the-world-hackathon.netlify.app/">Hackathon Netlify</a> 
      },
      CocktailParadise: {
        title: "Cocktail Paradise | Wild Code School :",
        resume:
          "Réalisé du 6 avril au 15 mai 2020. 4 personnes, fait à l’aide de React, l’application Web avait pour but de consommer une API de Cocktails afin de réaliser un projet autour du thème des vacances et des palmiers.",
        image: <img className='Preview_Project' src={Paradise} alt="CocktailParadise_Preview"/>, 
        link: <a href="https://cocktail-paradise.netlify.app/">CocktailParadise Netlify</a>   
      },
    };
  }
  render() {
    return (
      <div>
        <Tabs ProjectApi={this.state} />
      </div>)
  }
}


export default ApiProject;