declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_DB_USER: string;
    readonly NEXT_PUBLIC_DB_PASSWORD: string;
    readonly NEXT_PUBLIC_PAGE_HOST: string;
    readonly NEXT_PUBLIC_API_HOST: string;
    readonly NEXT_PUBLIC_DB_HOST: string;
    readonly NEXT_PUBLIC_OPEN_API_KEY: string;
  }
}
