const AppConstants = {
  // Which backend API to talk to?
  // Defaults to 'https://conduit.productionready.io/api'
  //
  // To change it, set an environment variable before running gulp. E.g:
  //   export API_ENDPOINT='http://localhost:3000/api' && gulp
  api: process.env.API_ENDPOINT,

  jwtKey: 'jwtToken',
  appName: 'Conduit',
};

export default AppConstants;
