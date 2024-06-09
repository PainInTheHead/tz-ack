"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Сброс стилей браузера по умолчанию */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  /* Удаление отступов у списков */
  ol,
  ul {
    list-style: none;
  }
  /* Удаление подчеркивания у ссылок */
  a {
    text-decoration: none;
  }
  /* Удаление анимации при наведении на ссылки */
  a:hover {
    text-decoration: none;
  }
  /* Удаление фокуса у элементов при клике */
  :focus {
    outline: none;
  }
  /* Установка шрифта по умолчанию */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }
  /* Установка фона по умолчанию */
  body {
    background-color: #fff;
  }
  /* Установка размера шрифта для h1-h6 */
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.67em;
  }
  /* Установка стилей для кнопок */
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
    margin: 0;
  }
  /* Установка стилей для таблиц */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* Установка стилей для форм */
  input,
  textarea,
  select,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }
  /* Установка стилей для изображений */
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 767px) {
    // Отключение hover для мобильных устройств
    * {
      pointer-events: none;
    }

    // Восстановление pointer-events для элементов, для которых hover нужен
    button,
    input,
    textarea,
    select,
    a {
      pointer-events: auto;
    }
  }
`;

export default GlobalStyle;
