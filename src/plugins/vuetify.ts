// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'; // Optional if you're using mdi icons

// Vuetify
import { createVuetify } from 'vuetify'
const customAliases = {
  'custom-c-sharp': '/img/icons/c-sharp.svg', // Define a custom alias
};
export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'light',
    },
    display: {
      thresholds: {
        xs: 600,
        sm: 960,
        md: 1264,
        lg: 1904,
      },
      // scrollBarWidth: 24,
    },
    icons: {
      defaultSet: 'mdi', // You can change this if needed
      aliases: customAliases,
    },
  }
)
