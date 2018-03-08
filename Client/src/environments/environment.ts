// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   name:'dev',
  apiBaseUrl : 'https://csohubbackend-dev.cisco.com', 
  logoutUrl : 'https://www.cisco.com/autho/logout.html?ReturnUrl=http://www.cisco.com/web/fw/lo/logout.html'
  //logoutUrl : 'https://www-stage.cisco.com/autho/logout.html?ReturnUrl='http://www-stage.cisco.com/web/fw/lo/logout.html?locale=en_US&redirectTo='https://tools-dev.cisco.com/AppSpecificLogout.html'
};