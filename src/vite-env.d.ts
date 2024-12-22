/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEMPO: string
  readonly VITE_GEMINI_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'tempo-routes' {
  import { RouteObject } from 'react-router-dom';
  const routes: RouteObject[];
  export default routes;
}