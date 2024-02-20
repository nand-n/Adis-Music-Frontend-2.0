/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: "development",
  API_BASE_URL: "http://localhost:8000",
  MSW_ENABLED: "true",

  isProd() {
    return this.NODE_ENV === 'production'
  },
  isDev() {
    return this.NODE_ENV === 'development'
  },
  isTest() {
    return this.NODE_ENV === 'test'
  },
  isMswEnabled() {
    return this.MSW_ENABLED === 'true'
  },
}

export default Env
