import type { Translations } from './types';

export const ru: Translations = {
  header: {
    navHome: 'Главная'
  },
  footer: {
    languagesHeading: 'Языки сайта:'
  },
  aside: {
    navWords: 'Слова',
    navUnits: 'Юниты',
    navProfile: 'Профиль',
    navRoadmap: 'Дорожная карта'
  },
  themeToggle: {
    light: 'Светлая',
    dark: 'Тёмная',
    contrast: 'Контраст'
  },
  languageSwitcher: {
    ariaLabel: 'Выбор языка'
  },
  landingPage: {
    title: 'О продукте',
    text: 'наш продукт умеет то и то'
  },
  unitsPage: {
    title: 'Юниты',
    text: 'Заготовка: сюда будут добавляться тематические юниты по дням изучения.'
  },
  profilePage: {
    title: 'Профиль',
    text: 'Заготовка: раздел о пользователе появится здесь позже.'
  },
  roadmapPage: {
    title: 'Дорожная карта',
    text: 'Заготовка: план обучения появится здесь позже.'
  },
  wordsPage: {
    title: 'Слова',
    tabTable: 'Таблица',
    tabTrainer: 'Тренажёр'
  },
  wordsShared: {
    noWordsYet: 'Слов пока нет — запустите синхронизацию с Notion.'
  },
  wordsTable: {
    colTerm: 'Слово',
    colGender: 'Род',
    colTranslation: 'Перевод',
    colPartOfSpeech: 'Часть речи',
    colUnit: 'Юнит'
  },
  wordsTrainer: {
    modeTranslation: 'Перевод',
    modeGender: 'Род',
    noWordsForMode: 'Для этого режима подходящих слов нет.',
    correct: 'Верно',
    incorrectPrefix: 'Неверно — ',
    next: 'Далее',
    showTranslation: 'Показать перевод',
    knewIt: 'Знал',
    didNotKnow: 'Не знал',
    scoreLabel: 'Счёт: ',
    remainingLabel: ' · Осталось повторить: ',
    allDone: 'Все слова в этом режиме уже пройдены.',
    resetProgress: 'Сбросить прогресс'
  },
  styleGuide: {
    lead: 'Референс компонентов O-Servus: цвет, типографика и базовые UI-элементы.',
    colorHeading: 'Цвет',
    typographyHeading: 'Типографика',
    typeBodyLargeDesc: 'текст среднего размера для лидов',
    typeBodyDesc: 'основной текст интерфейса',
    typeCaptionDesc: 'подписи и вспомогательный текст',
    buttonsHeading: 'Кнопки',
    cardsHeading: 'Карточки',
    flatCardDesc: 'Обычная карточка на белой поверхности с тонкой границей и мягкой тенью.',
    glassCardDesc: 'Полупрозрачная карточка с блюром поверх градиентной подложки.',
    badgesHeading: 'Бейджи',
    fieldsHeading: 'Поля ввода',
    nameLabel: 'Имя',
    namePlaceholder: 'Введите имя',
    commentLabel: 'Комментарий',
    commentPlaceholder: 'Ваш текст',
    regionLabel: 'Регион',
    sliderHeading: 'Слайдер',
    slideAriaLabel: 'Слайд'
  },
  a11y: {
    skipToContent: 'Перейти к содержимому',
    headerNavLabel: 'Основная навигация',
    asideNavLabel: 'Навигация по разделам обучения'
  }
};
