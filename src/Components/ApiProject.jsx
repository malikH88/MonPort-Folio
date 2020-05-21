import React from 'react';
import Tabs from './Tabs';

class ApiProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WildBook: {
        title: "Wild Book | Wild Code School :",
        Resume:
          "Réalisé du 9 mars au 27 mars 2020. Le projet avait pour but de créer une page web statique qui faisait découvrir la promotion 2020 des élèves de la Wild, réalisé avec une équipe de 3 personnes, à l’aide des langages tels que HTLM5, CSS3, ainsi que l’utilisation de l’environnement GITHUB, Linux."
      },
      Hackathon: {
        title: "Hackathon 32h | Wild Code School :",
        Resume:
          "Le Hackathon avait pour but d’utiliser une Api de Webcam puis en faire une application web de notre choix, réalisé avec une équipe de 3 personnes, à l’aide des langages tels que JavaScript, Jsx, ainsi que l’utilisation du Framework React-Strap."
      },
      CocktailParadise: {
        title: "Cocktail Paradise | Wild Code School :",
        Resume:
          "Réalisé du 6 avril au 15 mai 2020. 4 personnes, fait à l’aide de React, l’application Web avait pour but de consommer une API de Cocktails afin de réaliser un projet autour du thème des vacances et des palmiers."
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