/// <reference types="vite/client" />
/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_DEVTOOLS: string;
  readonly VITE_ROBOTS: string;
  readonly VITE_API_BASE_URL: string;
  VITE_THEME_STORAGE_KEY: string;
}
