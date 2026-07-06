/**
 * Explicit `string` (not literal) leaf types so ru/en/de each get an
 * excess/missing-property check against the exact same key set — a typo or
 * a locale falling behind fails the build instead of silently rendering
 * blank text.
 */
export interface Translations {
  header: {
    navHome: string;
  };
  footer: {
    languagesHeading: string;
  };
  aside: {
    navWords: string;
    navUnits: string;
    navProfile: string;
    navRoadmap: string;
  };
  themeToggle: {
    light: string;
    dark: string;
    contrast: string;
  };
  languageSwitcher: {
    ariaLabel: string;
  };
  landingPage: {
    title: string;
    text: string;
  };
  unitsPage: {
    title: string;
    text: string;
  };
  profilePage: {
    title: string;
    text: string;
  };
  roadmapPage: {
    title: string;
    text: string;
  };
  wordsPage: {
    title: string;
    tabTable: string;
    tabTrainer: string;
  };
  wordsShared: {
    noWordsYet: string;
  };
  wordsTable: {
    colTerm: string;
    colGender: string;
    colTranslation: string;
    colPartOfSpeech: string;
    colUnit: string;
  };
  wordsTrainer: {
    modeTranslation: string;
    modeGender: string;
    noWordsForMode: string;
    correct: string;
    incorrectPrefix: string;
    next: string;
    showTranslation: string;
    knewIt: string;
    didNotKnow: string;
    scoreLabel: string;
    remainingLabel: string;
    allDone: string;
    resetProgress: string;
  };
  styleGuide: {
    lead: string;
    colorHeading: string;
    typographyHeading: string;
    typeBodyLargeDesc: string;
    typeBodyDesc: string;
    typeCaptionDesc: string;
    buttonsHeading: string;
    cardsHeading: string;
    flatCardDesc: string;
    glassCardDesc: string;
    badgesHeading: string;
    fieldsHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    commentLabel: string;
    commentPlaceholder: string;
    regionLabel: string;
    sliderHeading: string;
    slideAriaLabel: string;
  };
  a11y: {
    skipToContent: string;
    headerNavLabel: string;
    asideNavLabel: string;
  };
}
