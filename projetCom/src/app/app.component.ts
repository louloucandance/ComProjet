import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet Communication';
  cpt = 0;

  louise = {
    surname : 'Louise',
    name : 'Gentillet',
    age : '21',
    exPro : ["Alternance à CGX en développement logiciel",
            "Stage à CGX en développement logiciel",
            "Stage en développement web dans l'association TempsDanse65",
            "Petits boulots étudiants"],
    cursus : ["Licence MIASHS informatique",
              "Bac ES"],
    perso : ["Celibataire",
            "Sans enfant",
            "Permis B"],
    extraverti : 85,
    introverti : 15,
    intuitif : 66,
    observateur :34,
    pensee : 50,
    sentiment : 50,
    jugement: 65,
    prospection : 35,
    assure : 35,
    prudent : 65,
    attentesPro : "Travailler à l'étranger à long terme. CAPES informatique apres le master.",
    attentesPerso : "Du voyage !",
    competencesProg : [
      {name : "Java" , value : 5},
      {name : "C++", value :9},
      {name : "Python" , value :6},
      {name : "Haskell" , value :4}
    ],
    competencesBDD : [
      {name : "SQL", value : 7},
      {name : "Postgre", value : 5}
    ],
    competencesWeb : [
      {name : "HTML5/CSS3", value : 8},
      {name : "JS", value : 5},
      {name : "Angular", value : 4}
    ],
    competencesLangues : [
      {name : "Anglais", value : 7},
      {name : "Espagnol", value : 9}
    ],
    competencesAutres : [
      {name : "Photoshop", value : 8}
    ],
    savoirEtre : ["Tenue Professionnelle",
    "Protection",
    "Maturité",
    "Assiduité",
    "Autonomie",
    "Débrouillardise",
    "Intégrité",
    "Initiative",
    "Audace",
    "Esprit d'équipe",
    "Polyvalence"
  ],
  savoirFaire : [
    "Sites Web",
    "Logiciels",
    "Tests",
    "Gestion de BDD",
    "Communication",
    "Échanges professionnels"    
  ],
  interets : [
    "Photographie",
    "Danse",
    "Natation",
    "Cinéma"
  ],
  itineraire : [
    "Alternance à CGX en développement logiciel",
    "Stage à CGX en développement logiciel ",
    "Stage en développement web dans l'association TempsDanse65",
    "Divers jobs étudiants",
    "Photographie"
  ],
  influence : [
    "Ada Lovelace",
    "Simone de Beauvoir",
    "Pina Baush"
  ]

  }

  yoann = {
    surname : 'Yoann',
    name : 'Gathignol',
    age : '23',
    exPro : ["Alternance à CGX",
            "Stage de recherche en web sémantique",
            "Stage de recherche à l'Université Robert Gordon à Aberdeen (Écosse)"],
    cursus : ["Licence MIASHS informatique",
              "Bac STI2D"],
    perso : ["Celibataire",
            "Sans enfant"],
    extraverti : 33,
    introverti : 67,
    intuitif : 59,
    observateur :41,
    pensee : 26,
    sentiment : 74,
    jugement: 22,
    prospection : 78,
    assure : 22,
    prudent : 78,
    attentesPro : "Contribuer à un projet qui met en valeur mon travail.",
    attentesPerso : "Épanouissement et musique.",
    competencesProg : [
      {name : "Java", value : 8},
      {name : "C++" , value : 4},
      {name : "Python" , value : 8},
      {name : "Haskell" , value :3}
    ],
    competencesBDD : [
      {name : "SQL" , value :7},
      {name : "Postgre", value : 5}
    ],
    competencesWeb : [
      {name : "HTML5/CSS3", value : 5},
      {name : "JS", value :7},
      {name : "Angular", value : 7}
    ],
    competencesLangues : [
      {name : "Anglais", value : 9},
      {name : "Allemand" , value : 3}
    ],
    competencesAutres:null,
    savoirEtre : ["Tenue Professionnelle",
    "Protection",
    "Vigilance",
    "Assiduité",
    "Autonomie",
    "Débrouillardise",
    "Patient",
    "Intégrité",
    "Changement",
    "Esprit d'équipe",
    "Polyvalence"
  ],
  savoirFaire : [
    "Sites Web",
    "Logiciels",
    "Tests",
    "Gestion de BDD",
    "Communication",
    "Échanges professionnels"    
  ],
  interets : [
    "Jeux Vidéos Compétitifs",
    "Musique"
  ],
  itineraire :  ["Alternance à CGX",
  "Stage de recherche en web sémantique",
  "Stage de recherche à l'Université Robert Gordon à Aberdeen (Écosse)"],
  influence : [
    "Gabe Newell"
  ]

  }

  cki = [this.louise, this.yoann];

  yoyotoggle(){
    this.cpt = 1;
  }

  louloutoggle(){
    this.cpt = 0;
  }






}
