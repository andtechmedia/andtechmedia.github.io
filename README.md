# techandmedia.github.io
Portfolio Website on GitHub Pages

How to publish react-app on Github Pages if you already have 'static web' on your User Page, not Project Page.

Create a folder on your computer:
```
mkdir my-folder
cd my-folder
```

Then clone your repository, for example
```
git clone https://github.com/techandmedia/techandmedia.github.io
```

Create your react app from a template:
```
create-react-app mynew-app
```

Go to the new folder, and test if it run properly (chose one)
```
npm start
yarn start
```

Open your package.json and add this:
```
"homepage": "https://myusername.github.io",
```

Example for my website that is a User Page:
```
"homepage": "https://techandmedia.github.io/",
```

Then run this command (chose one):
```
npm install --save gh-pages
yarn add gh-pages
```

Add the following scripts:
```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -b master -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
```

Then run:
```
npm run deploy
```

Check your github pages setting, and make sure it set to master.

This might be not the elegant solution because you have to go back between your 'root' user folder and react project folder just to ensure that your repository is in sync with github.
