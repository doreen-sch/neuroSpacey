import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{ font-family: var(--font-body), sans-serif;
  }
  :root {

/* Light Mode */

/* Background #FDF5EE — sehr helles warmes Creme */
--color-background-50: #fdf5ee;
--color-background-100: #fbe9d9;
--color-background-100-rgb: 251, 233, 217;
--color-background-200: #f5d0b3;
--color-background-200-rgb: 245, 208, 179;
--color-background-300: #efb082;
--color-background-400: #e78750;
--color-background-500: #e1672e;
--color-background-600: #d35023;
--color-background-700: #af3c1f;
--color-background-800: #8c3120;
--color-background-900: #712b1d;
--color-background-950: #3d130d;

/* Rosa Gradient */
--color-rosa-50: #fff0f5;
--color-rosa-100: #ffe0ec;
--color-rosa-200: #fed6e0;
--color-rosa-300: #fbb8cc;
--color-rosa-400: #f794b0;
--color-rosa-500: #f27098;
--color-rosa-600: #e84d80;
--color-rosa-700: #c73366;
--color-rosa-800: #a52252;
--color-rosa-900: #861843;
--color-rosa-950: #4d0a25;

/* Surface #baa5ae — zartes Mauve-Rosa für Cards */
--color-surface-50: #fafafa;
--color-surface-100: #f6f3f4;
--color-surface-200: #e9e2e5;
--color-surface-300: #dbd1d5;
--color-surface-400: #baa5ae;
--color-surface-500: #816a74;
--color-surface-600: #624b55;
--color-surface-700: #4c3941;
--color-surface-800: #2c2528;
--color-surface-900: #1d1619;
--color-surface-950: #0d070a;


/* Primary #436b7d — gedämpftes Teal als Hauptfarbe */
--color-primary-50: #f2f8f9;
--color-primary-100: #dfebee;
--color-primary-200: #c2d9df;
--color-primary-300: #98bdc8;
--color-primary-400: #6699aa;
--color-primary-500: #4b7d8f;
--color-primary-600: #436b7d;
--color-primary-700: #3a5664;
--color-primary-800: #354a55;
--color-primary-900: #303f49;
--color-primary-950: #1c2830;

/* Accent #bb624e — warmes Terrakotta */
--color-accent-50: #fcf5f4;
--color-accent-100: #f9eae7;
--color-accent-200: #f4dad4;
--color-accent-300: #ebc0b6;
--color-accent-400: #de9a8b;
--color-accent-500: #ce7865;
--color-accent-600: #bb624e;
--color-accent-700: #9b4c3a;
--color-accent-800: #814133;
--color-accent-900: #6c3b30;
--color-accent-950: #3a1c15;

/* Text #583a56 — dunkles Lila-Braun */
--color-text-50: #fbf8fb;
--color-text-100: #f6f0f7;
--color-text-200: #ede0ee;
--color-text-300: #e0c6e1;
--color-text-400: #cea4ce;
--color-text-500: #b67fb6;
--color-text-600: #986197;
--color-text-700: #7d4e7b;
--color-text-800: #674165;
--color-text-900: #583a56;
--color-text-950: #351d33;

/* Text secondary #68445e — gedämpftes Dunkelmauve */
--color-textSecondary-50: #f9f6f9;
--color-textSecondary-100: #f4eff3;
--color-textSecondary-200: #ebdfea;
--color-textSecondary-300: #dcc5d9;
--color-textSecondary-400: #c5a1bf;
--color-textSecondary-500: #b183a8;
--color-textSecondary-600: #9a688e;
--color-textSecondary-700: #825476;
--color-textSecondary-800: #68445e;
--color-textSecondary-900: #5d3e54;
--color-textSecondary-950: #362130;

/* Dark Mode */

/* Background #1E2830 — sehr dunkles Teal-Schwarz */
--color-backgroundDark-50: #f3f7f8;
--color-backgroundDark-100: #e0eaed;
--color-backgroundDark-200: #c4d6dd;
--color-backgroundDark-300: #9bb9c5;
--color-backgroundDark-400: #6a94a6;
--color-backgroundDark-500: #4f798b;
--color-backgroundDark-600: #446476;
--color-backgroundDark-700: #3c5462;
--color-backgroundDark-800: #374853;
--color-backgroundDark-900: #313e48;
--color-backgroundDark-950: #1e2830;

/* Surface #3d687b — dunkles Teal für Cards */
--color-surfaceDark-50: #f2f8f9;
--color-surfaceDark-100: #deecef;
--color-surfaceDark-200: #c0dae1;
--color-surfaceDark-300: #95bfcb;
--color-surfaceDark-400: #629bae;
--color-surfaceDark-500: #477f93;
--color-surfaceDark-600: #3d687b;
--color-surfaceDark-700: #375767;
--color-surfaceDark-800: #334a57;
--color-surfaceDark-900: #2e404b;
--color-surfaceDark-950: #1b2831;

/* Primary #be9bb3 — helles Mauve */
--color-primaryDark-50: #f9f6f8;
--color-primaryDark-100: #f4eff3;
--color-primaryDark-200: #eae0e7;
--color-primaryDark-300: #dbc6d5;
--color-primaryDark-400: #be9bb3;
--color-primaryDark-500: #ae86a0;
--color-primaryDark-600: #976b86;
--color-primaryDark-700: #80566e;
--color-primaryDark-800: #6b495c;
--color-primaryDark-900: #5b404f;
--color-primaryDark-950: #35222d;

/* Accent #6a878d — helles gedämpftes Teal als Akzent */
--color-accentDark-50: #f8fcfc;
--color-accentDark-100: #f2f8f8;
--color-accentDark-200: #e3edef;
--color-accentDark-300: #ccdde0;
--color-accentDark-400: #96b1b6;
--color-accentDark-500: #6a878d;
--color-accentDark-600: #496267;
--color-accentDark-700: #354e53;
--color-accentDark-800: #203439;
--color-accentDark-900: #112128;
--color-accentDark-950: #030f16;

/* Text #f6d6b0 — warmes helles Creme */
--color-textDark-50: #fdf7ef;
--color-textDark-100: #fbedd9;
--color-textDark-200: #f6d6b0;
--color-textDark-300: #f0bb81;
--color-textDark-400: #e9954e;
--color-textDark-500: #e4782b;
--color-textDark-600: #d56021;
--color-textDark-700: #b1491d;
--color-textDark-800: #8d3b1f;
--color-textDark-900: #72331c;
--color-textDark-950: #3d180d;

/* Text secondary #baa5ae — weiches Mauve */
--color-textSecondaryDark-50: #fafafa;
--color-textSecondaryDark-100: #f6f3f4;
--color-textSecondaryDark-200: #e9e2e5;
--color-textSecondaryDark-300: #dbd1d5;
--color-textSecondaryDark-400: #baa5ae;
--color-textSecondaryDark-500: #816a74;
--color-textSecondaryDark-600: #624b55;
--color-textSecondaryDark-700: #4c3941;
--color-textSecondaryDark-800: #2c2528;
--color-textSecondaryDark-900: #1d1619;
--color-textSecondaryDark-950: #0d070a;

/* Spacing */
  --spacing-h3-p: 0.25rem;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 2rem;
  --spacing-xxl: 48px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-overlap: 100px;
  --radius-full: 9999px;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
  margin: 0;
  padding: 0;
    height: 100%;
}

body {
  background: linear-gradient(
   180deg,
  var(--color-primaryDark-200) 0%,
var(--color-primaryDark-50) 80%
  );
  background-attachment: fixed;
    color: var(--color-text-800);

}

  h1, h2, h3 {
  font-family: var(--font-display), serif;
    color: var(--color-text-800);
}
`;
