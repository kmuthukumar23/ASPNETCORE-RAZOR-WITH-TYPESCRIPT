# Steps for render the syncfusion components in ASP.NET Core Razor with Typescript:

## Add the Syncfusion component’s '.ts' file in ‘Scripts’ folder in root directory.
## Add typescript config json and webpack.config files in the root directory.
### Please add the following contents in ts and webpack config file
##### tsconfig.json:
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "lib": [ "es2015.promise", "es2015", "dom" ]
  },
  "include": [
    "Scripts/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"	
  ]
}

##### Webpack.config.js:
const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'Scripts');
const DESTINATION = path.resolve(__dirname, 'wwwroot/js');

module.exports = {
    context: ROOT,

    entry: {
        'index': './calendar.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    }	
};
## Add the proper path for entryPath and output path in the webpack.config file
## Add dependencies in the package.json file
##### package.json
{
  "name": "razor",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "main": "calendar.js",
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
  "devDependencies": {
    "@syncfusion/ej2-calendars": "16.3.21",
    "source-map-loader": "0.1.6",
    "webpack": "^4.0.0",
    "webpack-cli": "^3.0.2",
    "ts-loader": "^2.3.4",
    "typescript": "^2.4.2"
  }
}

## Open the command prompt in the project root directory and run the 'npm run build' command.
## After that run the project.
