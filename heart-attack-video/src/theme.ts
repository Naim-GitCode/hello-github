import {loadFont} from '@remotion/google-fonts/Inter';

export const {fontFamily} = loadFont('normal', {
  weights: ['400', '600', '800'],
  subsets: ['latin'],
});

export const C = {
  bg1: '#0b0f1a',
  bg2: '#21101c',
  red: '#e63946',
  redLight: '#ff6b6b',
  text: '#f8f9fb',
  muted: '#aab1c5',
  plaque: '#f4c95d',
  clot: '#6d0a16',
  dead: '#4a4458',
  card: 'rgba(255,255,255,0.06)',
  cardBorder: 'rgba(255,255,255,0.12)',
};
