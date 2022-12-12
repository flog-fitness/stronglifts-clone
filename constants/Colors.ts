const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// Flog colours
export const redFlog = '#F93838';
export const subtextGreyFlog = '#9B9DA4';
export const lightGreyFlog = '#47484B';
export const darkGreyFlog = '#232425';
export const yellowFlog = '#FCB242';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  whiteOnRed: {
    text: '#fff',
    background: redFlog,
  },
};
