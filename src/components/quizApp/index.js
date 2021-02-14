export const QuizApp = [
    {
        fournisseur: "Donkey Geek (https://www.youtube.com/c/DonkeyGeek)",
        sujet: "Application Quiz pour apprentissage React JS",
        quiz: { // quiz est un objet
            "debutant": [
                {
                    id: 0,
                    question: "React est un ?",
                    options: [
                        "Bibliothèque Javascript",
                        " Framework Javascript",
                        "Les deux propositions sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Aucune de ces réponses n’est vraie",
                    heroId: 1009362
                },
                {
                    id: 1,
                    question: " ReactJS couvre la ?",
                    options: [
                        "Couche d’interface utilisateur (UI) dans une application",
                        "Couche de données dans une application",
                        "Les deux A et B sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Couche d’interface utilisateur (UI) dans une application",
                    heroId: 1009718
                },
                {
                    id: 2,
                    question: "ReactJS utilise _____ pour augmenter les performances ?",
                    options: [
                        "DOM virtuel",
                        "DOM réel",
                        "Les deux propositions sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "DOM virtuel",
                    heroId: 1009610
                },
                {
                    id: 3,
                    question: "React est basé sur ?",
                    options: [
                        "Les modules",
                        "Les services",
                        "Les composants",
                        "Les microservices"
                    ],
                    answer: "Les composants",
                    heroId: 1009718
                },
                {
                    id: 4,
                    question: "Dans quel répertoire les composants de React JS sont-ils enregistré ?",
                    options: [
                        "Dans js/components/",
                        "Dans vendor/components/",
                        "Dans external/components/",
                        "Dans vendor/"
                    ],
                    answer: "Dans js/components/",
                    heroId: 1009664
                },
                {
                    id: 5,
                    question: "Les Props sont __________ dans d’autres composants ?",
                    options: [
                        "Injecté",
                        "des méthodes",
                        "Les deux A et B sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "des méthodes",
                    heroId: 1009351
                },
                {
                    id: 6,
                    question: "Combien d’éléments un composant React renvoie-t-il ?",
                    options: [
                        "1 élément",
                        "2 élément",
                        "Plusieurs éléments",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Plusieurs éléments",
                    heroId: 1009662
                },
                {
                    id: 7,
                    question: "Quelles sont les limites de ReactJS?",
                    options: [
                        "React ne concerne que la couche View de l’application, nous avons donc toujours besoin de l’aide des autres technologies pour obtenir un ensemble d’outils complet pour le développement",
                        "React utilise des modèles en ligne et JSX. Cela peut sembler gênant pour certains développeurs",
                        "La bibliothèque de react est trop grande",
                        "Tout les réponses sont vrais"
                    ],
                    answer: "Tout les réponses sont vrais",
                    heroId: 1009368
                },
                {
                    id: 8,
                    question: "Comment accéder à l’état d’un composant à l’intérieur d’une fonction membre ?",
                    options: [
                        "this.getState()",
                        "this.prototype.stateValue",
                        "this.state",
                        "this.values"
                    ],
                    answer: "this.values",
                    heroId: 1009220
                },
                {
                    id: 9,
                    question: "State dans react est ________?",
                    options: [
                        "Un stockage permanent",
                        "Un stockage interne du composant",
                        "Les deux propositions sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Un stockage interne du composant",
                    heroId: 1009662
                }
            ],
            "confirme": [
                {
                    id: 0,
                    question: "Les Props dans React peuvent________ ?",
                    options: [
                        "Être modifié à l’intérieur du composant",
                        "Ne pas être modifié dans le composant",
                        "Être modifié dans d’autre composant",
                        "Aucune de ces réponses n’est vraie."
                    ],
                    answer: "Aucune de ces réponses n’est vraie.",
                    heroId: 1009718
                },
                {
                    id: 1,
                    question: "Dans ReactJS, les props peuvent être utilisés pour passer des________?",
                    options: [
                        "propriétés au composant",
                        "gestionnaires d’événements au composant",
                        "Les deux propositions sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Les deux propositions sont vrais",
                    heroId: 1009466
                },
                {
                    id: 2,
                    question: "Que fait la commande « webpack »? ?",
                    options: [
                        "Transforme tout le Javascript en un seul fichier",
                        "Exécute le serveur de développement local React",
                        "Un module bundler",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Un module bundler",
                    heroId: 1009368
                },
                {
                    id: 3,
                    question: "Quel port est le port par défaut où le webpack-dev-server s’exécutera ?",
                    options: [
                        "3000",
                        "8080",
                        "3306",
                        "8000"
                    ],
                    answer: "3000",
                    heroId: 1014985
                },
                {
                    id: 4,
                    question: "Quelles sont les deux façons dont les données sont traitées dans React?",
                    options: [
                        "state & props",
                        "services & components",
                        "state & services",
                        "props & components"
                    ],
                    answer: "state & props",
                    heroId: 1009318
                },
                {
                    id: 5,
                    question: "Dans React, qu’est-ce qui est utilisé pour transmettre des données à un composant de l’extérieur?",
                    options: [
                        "setState",
                        "render avec des arguments",
                        "props",
                        "PropTypes"
                    ],
                    answer: "props",
                    heroId: 1009526
                },
                {
                    id: 6,
                    question: "Quel est le nom du développeur de React.js?",
                    options: [
                        "Jordan mike",
                        "Jordan Walke",
                        "Jordan Lee",
                        "Tim Lee"
                    ],
                    answer: "Jordan Walke",
                    heroId: 1009262
                },
                {
                    id: 7,
                    question: "Qui développe React.js?",
                    options: [
                        "Google",
                        "Twitter",
                        "Apple",
                        "Facebook"
                    ],
                    answer: "Facebook",
                    heroId: 1010952
                },
                {
                    id: 8,
                    question: "______ aide react à garder leurs données unidirectionnelles.",
                    options: [
                        "JSX",
                        "Flux",
                        "Dom",
                        "Props"
                    ],
                    answer: "Flux",
                    heroId: 1009303
                },
                {
                    id: 9,
                    question: "L’objet State dans react peut être mis à jour par appel à la méthode setState. Ces appels sont _________",
                    options: [
                        "Synchrone par nature",
                        "Asynchrone par nature",
                        "Sont asynchrones mais peuvent être synchronisés si nécessaire",
                        " Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Asynchrone par nature",
                    heroId: 1009281
                }
            ],
            "expert": [
                {
                    id: 0,
                    question: "Dès que l’état du composant React est modifié, le composant _______?",
                    options: [
                        "Ne fait rien, vous devez appeler la méthode render pour rendre à nouveau le composant",
                        "restitue le composant",
                        "recréé à partir de zéro",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "restitue le composant",
                    heroId: 1009608
                },
                {
                    id: 1,
                    question: "La méthode React « getDerivedSateFromProps(props , state) » est appelée lorsque ____ ?",
                    options: [
                        "Le composant est créé pour la première fois",
                        "L’état du composant est mis à jour",
                        "Les deux propositions sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Les deux propositions sont vrais",
                    heroId: 1009626
                },
                {
                    id: 2,
                    question: "La méthode componentDidMount est appelée lorsque ____?",
                    options: [
                        "Le composant est créé pour la première fois",
                        "L’état du composant est mis à jour",
                        "Les deux propositions sont vrais",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Le composant est créé pour la première fois",
                    heroId: 1009610
                },
                {
                    id: 3,
                    question: "Laquelle des API suivantes est un incontournable pour chaque composant ReactJS?",
                    options: [
                        "getInitialState",
                        "render",
                        "renderComponent",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "renderComponent",
                    heroId: 1009288
                },
                {
                    id: 4,
                    question: "Quels sont les avantages de React JS?",
                    options: [
                        "React peut être utilisé aussi bien côté client que côté serveur",
                        "L’utilisation de React augmente la lisibilité et facilite la maintenabilité. Les composants, les modèles de données améliorent la lisibilité et facilitent ainsi la gestion des applications plus grandes",
                        "React peut être utilisé avec n’importe quel autre framework (Backbone.js, Angular.js) car ce n’est qu’une couche View",
                        "Tout les réponses sont vrais"
                    ],
                    answer: "Tout les réponses sont vrais",
                    heroId: 1009421
                },
                {
                    id: 5,
                    question: "À quoi sert le deuxième argument de setState?",
                    options: [
                        "Pour appeler du code une fois l’opération setState terminée",
                        "Pour remplacer complètement l’état au lieu de l’action par défaut",
                        "Pour accéder à l’état précédent avant l’opération setState",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Pour appeler du code une fois l’opération setState terminée",
                    heroId: 1010788
                },
                {
                    id: 6,
                    question: "Quelle fonction peut-on utiliser pour modifier l’état d’un composant React?",
                    options: [
                        "this.State = {}",
                        "this.setState",
                        "this.changeState",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "this.setState",
                    heroId: 1011007
                },
                {
                    id: 7,
                    question: "Que se passera-t-il si vous faire le rendu d’un élément input avec disabled = {false}?",
                    options: [
                        "Il sera rendu comme enabled",
                        "Il sera rendu comme disabled",
                        "Il ne sera pas rendu du tout",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Il sera rendu comme enabled",
                    heroId: 1010338
                },
                {
                    id: 8,
                    question: "Quand est-il recommandé de passer this.setState en tant que fonction au lieu d’un objet?",
                    options: [
                        "Quand le nouvel état devrait remplacer complètement l’ancien état",
                        "Lorsque le nouvel état dépend de l’ancien état",
                        "Lorsque le nouvel état ne dépend pas de l’ancien état",
                        "Aucune de ces réponses n’est vraie"
                    ],
                    answer: "Lorsque le nouvel état dépend de l’ancien état",
                    heroId: 1009239
                },
                {
                    id: 9,
                    question: "Quelle est la façon déclarative de rendre une liste dynamique de composants en fonction des valeurs d’un tableau?",
                    options: [
                        "Utiliser la méthode reduce du tableau",
                        "Avec une boucle for/while",
                        "Utiliser le composant <Each />",
                        "Utiliser la méthode Array.map()"
                    ],
                    answer: "Utiliser la méthode Array.map()",
                    heroId: 1009629
                }
            ]
        }
    }
];