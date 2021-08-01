import appConfig from './appConfig.json'
// console.log(process.env)

export const SERVER_URL_PROTOCOL = process.env.REACT_APP_TYPE.includes("SSL") ? appConfig.SSL_SERVER_URL : appConfig.LOCAL_SERVER_URL;
export const SERVER_URL_HOST = process.env.REACT_APP_TYPE.includes("THIRD_PARTY") ? appConfig.SERVER_NAME + ":" + appConfig.PORT : '';
export const SERVER_URL = SERVER_URL_PROTOCOL+SERVER_URL_HOST
export default SERVER_URL