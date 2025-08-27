declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly BASE_URL: string;
  VITE_CUSTOMER: string;
  VITE_PRIMARY: string;
  VITE_SECONDARY: string;
  VITE_SUCCESS: string;
  VITE_INFO: string;
  VITE_WARNING: string;
  VITE_ERROR: string;
  VITE_SUBMIT: string;
  VITE_PENDDING: string;
  VITE_LOGO_PATH_LIGHT: string;
  VITE_LOGO_PATH_DARK: string;
  VITE_ICON_PAGE: string;
  VITE_LOGIN_IMAGE: string;
  VITE_CUSTOMER_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/// <reference types="vite/client" />
