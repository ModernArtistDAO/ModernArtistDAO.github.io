const {
  colors
} = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    container: true
  },
  theme: {
    // this gives us regular (mobile), sm (641px - 1281px) and lg (1281px+)
    screens: {
      'xs': '501px',
      'sm': '1041px',
      'lg': '1481px'
    },
    extend: {
      backgroundColor: {
        body: 'var(--color-bg-body)',
        card: 'var(--color-bg-card)',
        'card-selected': 'var(--color-bg-card-selected)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        default: 'var(--color-bg-default)',
        darkened: 'var(--color-bg-darkened)',
        inverse: 'var(--color-bg-inverse)',
        overlay: 'var(--color-bg-overlay)',
        black: 'var(--color-bg-black)',
        'highlight-1': 'var(--color-bg-highlight-1)',
        'highlight-2': 'var(--color-bg-highlight-2)',
        'highlight-3': 'var(--color-bg-highlight-3)',
        'highlight-4': 'var(--color-bg-highlight-4)',
        'highlight-5': 'var(--color-bg-highlight-5)',
        red: 'var(--color-bg-red)',
        'light-red': 'var(--color-bg-light-red)',
        green: 'var(--color-bg-green)',
        yellow: 'var(--color-bg-yellow)',
        blue: 'var(--color-bg-blue)',
        teal: 'var(--color-bg-teal)',
        'accent-grey-1': 'var(--color-bg-accent-grey-1)',
        'accent-grey-2': 'var(--color-bg-accent-grey-2)',
        purple: 'var(--color-bg-purple)',
      },
      textColor: {
        'accent-1': 'var(--color-text-accent-1)',
        'accent-2': 'var(--color-text-accent-2)',
        'accent-3': 'var(--color-text-accent-3)',
        black: 'var(--color-text-black)',
        primary: 'var(--color-text-primary)',
        'primary-soft': 'var(--color-text-primary-soft)',
        secondary: 'var(--color-text-secondary)',
        default: 'var(--color-text-default)',
        'default-soft': 'var(--color-text-default-soft)',
        inverse: 'var(--color-text-inverse)',
        'inverse-soft': 'var(--color-text-inverse-soft)',
        match: 'var(--color-text-match)',
        'highlight-1': 'var(--color-text-highlight-1)',
        'highlight-2': 'var(--color-text-highlight-2)',
        'highlight-3': 'var(--color-text-highlight-3)',
        red: 'var(--color-text-red)',
        green: 'var(--color-text-green)',
        yellow: 'var(--color-text-yellow)',
        blue: 'var(--color-text-blue)',
        teal: 'var(--color-text-teal)',
        'accent-grey-1': 'var(--color-text-accent-grey-1)',
        purple: 'var(--color-text-purple)',
      },
      borderColor: {
        'accent-1': 'var(--color-border-accent-1)',
        'accent-2': 'var(--color-border-accent-2)',
        'accent-3': 'var(--color-border-accent-3)',
        'accent-4': 'var(--color-border-accent-4)',
        primary: 'var(--color-border-primary)',
        card: 'var(--color-border-card)',
        secondary: 'var(--color-border-secondary)',
        default: 'var(--color-border-default)',
        transparent: 'var(--color-border-transparent)',
        inverse: 'var(--color-border-inverse)',
        'highlight-1': 'var(--color-border-highlight-1)',
        'highlight-2': 'var(--color-border-highlight-2)',
        red: 'var(--color-border-red)',
        green: 'var(--color-border-green)',
      },
      boxShadow: {
        'sm': '0 2px 6px 0 rgba(0, 0, 0, .07), 0 1px 2px -1px rgba(0, 0, 0, .04)',
        'md': '0 3px 8px -1px rgba(0, 0, 0, .1), 0 1px 5px -1px rgba(0, 0, 0, .06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
        'xl': '0 10px 25px -1px rgba(0, 0, 0, .1), 0 10px 10px 5px rgba(0, 0, 0, .04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
        '3xl': '0 20px 30px -3px rgba(0, 0, 0, .2), 0 15px 15px -3px rgba(0, 0, 0, .1)',
        '4xl': '0 30px 40px -3px rgba(0, 0, 0, .25), 0 20px 20px -3px rgba(0, 0, 0, .15)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-lg': 'inset 0 1px 5px 0 rgba(0, 0, 0, 0.2)'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        '5xl': '1.75rem',
        '6xl': '2rem',
        '7xl': '2.25rem',
        '8xl': '2.5rem',
      },
      height: {
        '28': '7rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      lineHeight: {
        relaxed: 1.75
      },
      fontSize: {
        'xxxs': '0.5rem',
        'xxs': '0.65rem',
        'md': '1.075rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '7.5xl': '4.5rem',
        '8xl': '5rem',
        '9xl': '6rem',
        '10xl': '7rem',
        '12xl': '8.5rem'
      },
      fontFamily: {
        'sans-regular': ['Titillium Web', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'number': ['DM Mono', 'Courier', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'headline': ['omnes-pro', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      opacity: {
        '0': '0',
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
        '100': '1',
      },
      fill: theme => ({
        // 'indigo': theme('colors.indigo.500')
      }),
      colors: {
        cyan: {
          '200': '#8f9779',
          '400': '##d0ff14',
        },
        blue: {
          ...colors.blue,
          '500': '#87a96b',
          '600': '#8f9779',
          '700': '#679267',
          '800': '#738678',
          '900': '#78866b',
          '1000': '#4f7942',
          '1100': '#4d5d53',
          '1200': '#454d32'
        },
        green: {
          ...colors.green,
          '100': '#568203',
          '200': '#009900',
          '300': '#00ab66',
          '400': '#8db600',
          '500': '#03c03c',
          '600': '#9dc209',
          '700': '#8bbe1b'
        },
        lightPurple: {
          '200': '#ff00ff',
          '300': '#da70d6',
          '400': '#f49ac2',
          '500': '#ff0090',
          '600': '#ff6fff',
          '700': '#c71585',
          '800': '#8e3a59',
          '900': '#cc00ff',
          '1000': '#fe4eda',
        },
        purple: {
          ...colors.purple,
          '800': '#9b870c',
          '900': '#967117',
          '1000': '#e4d00a',
          '1100': '#9c7c38',
          '1200': '#ffdf00',
          '1300': '#85754e'
        },
        lightpink: {
          '400': '#e66771',
        },
        orange: {
          ...colors.orange,
          '300': '#ffdab9',
          '400': '#ffa500',
          '500': '#ff7f50',
          '600': '#ffa089',
          '700': '#e2725b'
        },
        pink: {
          ...colors.pink,
          '100': '#4b5320',
          '200': '#737000',
          '300': '#545a2c',
          '400': '#665d1e',
          '500': '#556b2f',
          '600': '#867e36',
          '700': '#bdb76b',
          '800': '#e3f988',
          '1000': '#556b2f',
          '1100': '#e3f988',
        },
        teal: {
          ...colors.teal,
          '100': '#6b4423',
          '200': '#704214',
          '300': '#3c341f',
          '400': '#964b00',
          '500': '#b7410e',
          '600': '#c04000',
          '700': '#836953',
          '800': '#8b4513',
          '900': '#6b4423',
          '1000': '#3d0c02'
        },
      },
    },
  },
  variants: {
    borderColor: [
      'hover',
      'focus',
      'active'
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active'
    ],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active'
    ],
    borderRadius: [
      'responsive'
    ],
    opacity: [
      'hover',
      'focus',
      'responsive',
      'disabled'
    ]
  },
  plugins: []
}


