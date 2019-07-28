// https://coolors.co/acbea3-40476d-826754-ad5d4e-eb6534
// https://coolors.co/a63a50-f0e7d8-ab9b96-a1674a-ba6e6e
export const primary = `#A1674A`;
export const darkPrimary = LightenDarkenColor(primary, -20);
export const secondary = `#AB9B96`;
export const darkSecondary = `#594b47`;
export const tertiary = `#F0E7D8`;
export const info = `#78b4bd`;
export const success = `#3e9a3e`;
export const danger = `#bb3434`;
export const darkDanger = `#8f2828`;
export const rawNavbarHeight = 50;
export const navbarHeight = `50rem`;
const rawBreadcrumbHeight = rawNavbarHeight;
export const breadcrumbHeight = rawBreadcrumbHeight + `rem`;
export const mediaMobile = `@media screen and (max-width: 720px) and (min-width: 1px)`;
export const mediaDesktop = `@media screen and (min-width: 720px)`;
export const boxShadow1 = `0 10px 30px -24px #4b4e53`;
export const boxShadow2 = `0 10px 40px -24px #393b3f`;
export const boxShadow3 = `0 16px 50px -24px #212224`;
export const semiTransparentGray = `rgba(171, 155, 150, 0.9)`;
export const veryLightGray = `#eeeeee`;
export const lightGray = `#D3D3D3`;
export const darkGray = `#afafaf`;
export const fontFamily = `'Roboto Condensed', sans-serif`;

export default `
  :root {
    font-size: 1px; /* for 1rem to be 1px */
    font-family: ${fontFamily};
    background-color: ${lightGray};
    --color-primary: ${primary};
    --color-dark-primary: ${darkPrimary};
    --color-secondary: ${secondary};
    --color-dark-secondary: ${darkSecondary};
    --color-tertiary: ${tertiary};
    --color-info: ${info};
    --color-success: ${success};
    --color-light-gray: ${lightGray};
  }

  body {
    font-size: 16px;
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  & .navbar {
    height: ${navbarHeight};
  }

  & .navbar-margin-top {
    margin-top: ${navbarHeight};
  }

  & .breadcrumb-margin-top {
    margin-top: ${rawNavbarHeight + rawBreadcrumbHeight}rem;
  }

  & .primary: {
    color: ${primary};
  }

  & .bg-primary {
    background-color: ${primary};
  }

  & .secondary {
    color: ${secondary};
  }

  & .bg-secondary {
    background-color: ${secondary};
  }

  & a {
    color: initial;
  }

  & .no-underline {
    text-decoration: none;
  }

  & a.button {
    text-decoration: none;
    color: initial;
    cursor: default;
  }

  & button, & a.button {
    font-size: 18rem;
    border-radius: 6rem;
    padding: 8px 12px;
    border: none;
    font-family: ${fontFamily};
    text-align: center;
  }

  & button.small {
    font-size: 14rem;
  }

  & button.primary, & a.primary {
    background-color: ${primary};
    color: white;
    transition: background-color .2s;
  }

  & button.primary:hover, & a.button.primary:hover {
    background-color: ${darkPrimary};
  }

  & button.secondary, & a.button.secondary {
    transition: background-color 0.2s, color 0.2s;
    color: white;
    background-color: ${secondary};
  }

  & button.secondary:hover, & a.button.secondary:hover {
    background-color: ${darkSecondary};
  }

  & button.danger, & a.button.danger {
    transition: background-color 0.2s, color 0.2s;
    color: white;
    background-color: ${danger};
  }

  & button.danger:hover, & a.button.danger:hover {
    background-color: ${darkDanger};
  }

  & .web-form-input {
    margin: 24rem 0 0 32rem;
  }

  & button:disabled, & a.button:disabled, & button:disabled:hover, & a.button:disabled:hover {
    color: ${lightGray};
    background-color: ${semiTransparentGray};
    cursor: default;
  }

  & button.unstyled {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  & .responsive-flex {
    display: flex;
    align-items: center;
  }

  & .vertical-margin-8 {
    margin: 8rem 0;
  }

  ${mediaMobile} {
    & .responsive-flex {
      flex-direction: column;
    }

    & button:not(.unstyled) + button:not(.unstyled), & button:not(.unstyled) + .button:not(.unstyled), & .button:not(.unstyled) + .button:not(.unstyled), & .button:not(.unstyled) + button:not(.unstyled) {
      margin-top: 16rem;
    }
  }

  ${mediaDesktop} {
    & .responsive-flex {
      flex-direction: row;
    }

    & button:not(.unstyled) + button:not(.unstyled), & button:not(.unstyled) + .button:not(.unstyled), & .button:not(.unstyled) + .button:not(.unstyled), & .button:not(.unstyled) + button:not(.unstyled) {
      margin-left: 16rem;
    }

    & .card {
      border-radius: 6px;
    }
  }

  & input {
    font-family: ${fontFamily};
    background-color: ${lightGray};
    border-radius: 5px;
    font-size: 16px;
    border: none;
    background-color: rgb(226, 226, 226);
    padding: 8px 12px;
  }

  & ul:not(.with-bullets) {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  & ul.with-bullets li:not(last-child) {
    margin-bottom: 8rem;
  }

  & .card {
    background-color: white;
    box-shadow: 0 10px 30px -24px #4b4e53;
  }

  & .card > h1:first-child, & .card > h2:first-child, & .card > h3:first-child, & .card > h4:first-child, & .card > h5:first-child {
    margin-top: 0;
  }

  & .bold {
    font-weight: bold;
  }

  @media print {
    @page {
      size: letter;
    }

    #root-element {
      display: none;
    }

    #print-element {
      display: block !important;
    }
  }

  #print-element {
    display: none;
  }

  @page {
    size: auto;  /* auto is the initial value */
    margin: 0mm; /* this affects the margin in the printer settings */
  }

`;

function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
