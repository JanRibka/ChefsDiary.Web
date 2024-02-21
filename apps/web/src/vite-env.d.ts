/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_DEVTOOLS: string;
  readonly VITE_ROBOTS: string;
  readonly VITE_API_BASE_URL: string;
  VITE_THEME_STORAGE_KEY: string;
}
