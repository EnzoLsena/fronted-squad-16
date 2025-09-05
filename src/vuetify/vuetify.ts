import { createVuetify } from "vuetify";
import { themes } from "@/vuetify/theme";
import defaults from "@/vuetify/defaults";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDateInput } from "vuetify/labs/VDateInput";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components: {
    ...components,
    VDateInput,
  },
  locale: {
    locale: "pt-BR",
  },
  directives,
  defaults,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "light",
    themes,
  },
});
