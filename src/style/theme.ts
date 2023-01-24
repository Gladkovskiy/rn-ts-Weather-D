import {createTheme} from '@rneui/themed'

export const theme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        margin: 3,
      },
    },
    Text: {
      h1Style: {
        color: 'white',
      },
      h2Style: {
        color: 'white',
      },
      h3Style: {
        color: 'white',
        fontSize: 22,
      },
      h4Style: {
        color: 'white',
        fontSize: 18,
      },
    },
    Divider: {
      color: '#009A8F',
    },
  },
  mode: 'light',
  lightColors: {
    primary: '#14CE00',
    secondary: '#009A8F',
    background: '#A2EB00',
  },
})
