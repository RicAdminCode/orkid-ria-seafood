/** Worker bindings plus optional secrets; local development works without Google credentials. */
export interface Env extends Omit<Cloudflare.Env, 'SITE_ORIGIN'> {
  SITE_ORIGIN: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  ADMIN_PASSWORD?: string;
  TOKEN_ENCRYPTION_KEY?: string;
}
