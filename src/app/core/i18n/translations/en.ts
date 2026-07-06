import type { Translations } from './types';

export const en: Translations = {
  header: {
    navHome: 'Home'
  },
  footer: {
    languagesHeading: 'Site languages:'
  },
  aside: {
    navWords: 'Words',
    navUnits: 'Units',
    navProfile: 'Profile',
    navRoadmap: 'Roadmap'
  },
  themeToggle: {
    light: 'Light',
    dark: 'Dark',
    contrast: 'Contrast'
  },
  languageSwitcher: {
    ariaLabel: 'Language selection'
  },
  landingPage: {
    title: 'About the product',
    text: 'our product can do this and that'
  },
  unitsPage: {
    title: 'Units',
    text: 'Draft: thematic units will be added here by study day.'
  },
  profilePage: {
    title: 'Profile',
    text: 'Draft: a section about the user will appear here later.'
  },
  roadmapPage: {
    title: 'Roadmap',
    text: 'Draft: the study plan will appear here later.'
  },
  wordsPage: {
    title: 'Words',
    tabTable: 'Table',
    tabTrainer: 'Trainer'
  },
  wordsShared: {
    noWordsYet: 'No words yet — run the Notion sync.'
  },
  wordsTable: {
    colTerm: 'Word',
    colGender: 'Gender',
    colTranslation: 'Translation',
    colPartOfSpeech: 'Part of speech',
    colUnit: 'Unit'
  },
  wordsTrainer: {
    modeTranslation: 'Translation',
    modeGender: 'Gender',
    noWordsForMode: 'There are no suitable words for this mode.',
    correct: 'Correct',
    incorrectPrefix: 'Incorrect — ',
    next: 'Next',
    showTranslation: 'Show translation',
    knewIt: 'Knew it',
    didNotKnow: "Didn't know",
    scoreLabel: 'Score: ',
    remainingLabel: ' · Left to review: ',
    allDone: 'All words in this mode have been completed.',
    resetProgress: 'Reset progress'
  },
  styleGuide: {
    lead: 'O-Servus component reference: color, typography, and basic UI elements.',
    colorHeading: 'Color',
    typographyHeading: 'Typography',
    typeBodyLargeDesc: 'medium-size text for leads',
    typeBodyDesc: 'main interface text',
    typeCaptionDesc: 'captions and auxiliary text',
    buttonsHeading: 'Buttons',
    cardsHeading: 'Cards',
    flatCardDesc: 'A plain card on a white surface with a thin border and a soft shadow.',
    glassCardDesc: 'A translucent card with blur over a gradient background.',
    badgesHeading: 'Badges',
    fieldsHeading: 'Input fields',
    nameLabel: 'Name',
    namePlaceholder: 'Enter your name',
    commentLabel: 'Comment',
    commentPlaceholder: 'Your text',
    regionLabel: 'Region',
    sliderHeading: 'Slider',
    slideAriaLabel: 'Slide'
  },
  a11y: {
    skipToContent: 'Skip to content',
    headerNavLabel: 'Main navigation',
    asideNavLabel: 'Learning section navigation'
  }
};
