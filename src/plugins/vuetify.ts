import { createVuetify } from "vuetify";
import { themes } from "@/plugins/theme";
import defaults from "@/plugins/defaults.ts";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDateInput } from "vuetify/labs/VDateInput";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

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
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes,
  },
});
