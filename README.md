# react-roularta-workshop
React app for Roularta workshops


## Webpack encore

1. `npm init`


2. Install

2.1. Installatie via Symfony
```
 composer require symfony/webpack-encore-bundle
 yarn install
```

2.2 Installatie zonder Symfony
```
 yarn add @symfony/webpack-encore --dev


 npm install @symfony/webpack-encore --save-dev
```

3. Setup

3.1. Create `webpack.config.js`

3.2. Indien npm: voeg encore toe aan de `scripts` in package.json
```
"scripts": {
    "encore": "encore",
    "start": "encore dev-server",
    "build:dev": "encore dev",
    "build:prod": "encore production",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

3.3 Setup Sass
```
  // webpack.config.js
  Encore
      // ...

    .enableSassLoader()
;
```

```
npm i sass-loader sass --save-dev
```

3.4 (optional) install webpack-notifier
```
npm install webpack-notifier --save-dev
```

>(!) indien deze niet geinstalleerd wordt --> `enableBuildNotifications` in commentaar zetten


3.4 Copy image

```
npm install file-loader@^6.0.0 --save-dev
```

```
.copyFiles({
        from: './assets/img',

        // optional target path, relative to the output dir
        //to: 'images/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        //to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
    })
    ```

4. Add react

4.1. install packages
```
npm install react react-dom prop-types react-router-dom
npm install @babel/preset-react@^7.0.0 --save-dev
```

4.2. Toevoegen aan webpack.config.js
```
  // webpack.config.js
  // ...

  Encore
      // ...
     .enableReactPreset()
  ;
```

4.3
```
autoProvideVariables
```


5. Start
```
    npm run start
    npm run build:dev
    npm run build:prod
```
