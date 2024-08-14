export enum Locale {
  en = "en",
  fr = "fr",
}

export interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export function localIsValid(data: string): boolean {
  return (
    localization.locales.find((locale) => locale.localeCompare(data)) !=
    undefined
  );
}

export const localization = {
  locales: [Locale.en, Locale.fr],
  defaultLocale: Locale.en,
  localeDetection: false,
};

export const dictionary: Record<DictWords, Record<Locale, string>> = {
  iLoveCreating: {
    en: "I love creating content. currently working at",
    fr: "J'aime créer du contenu. Travaillant actuellement chez",
  },
  livingIn: {
    en: "Living in",
    fr: "Je Reside au",
  },
  download: {
    en: "Download",
    fr: "Télécharger",
  },
  resume: {
    en: "Resume",
    fr: "CV",
  },
  reactDeveloper: {
    en: "React Developer",
    fr: "Developeur React",
  },
  betterLifeDescription: {
    en: "Application that allows users to create and manage event.",
    fr: "Application qui permet aux utilisateurs de creer et gerer des evenements.",
  },
  saleRentalVehiclesDescription: {
    en: " Application for the sale and rental of vehicles and spare parts",
    fr: "Application pour la location et la vente de véhicules et des pieces détachées",
  },
  transAllDescription: {
    en: "Mobile and web application designed to simplify the mobile credit transfer process and efficient transaction management.",
    fr: "Application mobile et web concue pour simplifier le processus de transfert de credits mobile et la gestion efficace des transactions.",
  },
  advancedDartUtilDescription: {
    en: "The Dart Extensions package enriches the default Dart objects with powerful and flexible methods.",
    fr: "Le package Dart Extensions améliore les objets Dart par des methodes puissantes et flexibles.",
  },
  seeMore: {
    en: "See more",
    fr: "Voir plus",
  },
  flutterAndReactDeveloper: {
    en: "Developer flutter / React",
    fr: "Dévelopeur Flutter / React",
  },
  funProject: {
    en: "Side, fun projects",
    fr: "Projets sympas",
  },
  works: {
    en: "Works",
    fr: "Experiences",
  },
  contact: {
    en: "Contact",
    fr: "Contact",
  },
  contactMe: {
    en: "Contact me",
    fr: "Me Contacter",
  },
  contactMeDescription: {
    en: "I will be happy to work with you.",
    fr: "Je serais heureux de travailler avec vous.",
  },
  iLoveWorkOn: {
    en: "I love working on",
    fr: "J'aime travailler sur",
  },
  skills: {
    en: "Skills",
    fr: "Compétences",
  },
  flutterDescription1: {
    en: "My main framework is",
    fr: "Mon framework principal est",
  },
  flutterDescription2: {
    en: " is the best hybrid framework to create the app multi-platform with only one code",
    fr: " est le meilleur framework hybride pour creer l'application multiplateforme avec seulement un code",
  },
  reactDescription1: {
    en: "I can create",
    fr: "Je peux creer des applications ",
  },
  reactDescription2: {
    en: " smooth ",
    fr: " fluides ",
  },
  reactDescription3: {
    en: "application base on your convenance. i also use ",
    fr: "en fonction de votre convenance. j'utilise aussi ",
  },
  reactDescription4: {
    en: "as a backend and frontend framework",
    fr: "en tant que framework  backend et frontend ",
  },
  tailwindDescription2: {
    en: " beatiful ",
    fr: " fluides ",
  },
  tailwindDescription3: {
    en: "application using ",
    fr: "utilisant ",
  },
};

export const enum DictWords {
  iLoveCreating = "iLoveCreating",
  livingIn = "livingIn",
  download = "download",
  resume = "resume",
  reactDeveloper = "reactDeveloper",
  betterLifeDescription = "betterLifeDescription",
  saleRentalVehiclesDescription = "saleRentalVehiclesDescription",
  transAllDescription = "transAllDescription",
  advancedDartUtilDescription = "advancedDartUtilDescription",
  seeMore = "seeMore",
  flutterAndReactDeveloper = "flutterAndReactDeveloper",
  funProject = "funProject",
  works = "works",
  contact = "contact",
  contactMe = "contactMe",
  contactMeDescription = "contactMeDescription",
  iLoveWorkOn = "iLoveWorkOn",
  skills = "skills",
  flutterDescription1 = "flutterDescription1",
  flutterDescription2 = "flutterDescription2",
  reactDescription1 = "reactDescription1",
  reactDescription2 = "reactDescription2",
  reactDescription3 = "reactDescription3",
  reactDescription4 = "reactDescription4",
  tailwindDescription2 = "tailwindDescription2",
  tailwindDescription3 = "tailwindDescription3",
}
