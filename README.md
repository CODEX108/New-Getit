# Getit
A React app to search GitHub profiles and see profile details. 

## TECH STACK
- REACT JS
- Libraries -react-paginate 
- Axios
- Tailwind CSS
- [Daisy UI (The most popular, free and open-source Tailwind CSS component library)](daisyui.com)
- Netlify


### Setting Up react app
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
```
npx create-react-app my-app
cd my-app
npm start
==== starts the development server ===
```

### Setting Up Tailwind
1. Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.

```npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. Add Tailwind to your PostCSS configuration
Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
3.Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
```@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📀 Install now!

```bash
npm i daisyui
```

Then add daisyUI to your `tailwind.config.js`:  


```js
module.exports = {
  plugins: [require("daisyui")],
};
```

### Generating a personal token
A Personal Access Token (PAT) can be used as an alternative of password to authenticate with GitHub when you’re performing a Git operation or API call with GitHub.
Go to the the developer settings of your github account and slect the required option and generate a token.
[Documentation](https://cloudaffaire.com/how-to-create-personal-access-token-in-github/)

### Deployed on Netlify
1. Authorize your Github account with Netlify.
2. Select the repo to be deplyed
3. Add the Environment variables 
4. Select a custom domain
5. Deploy your site after the build is successful !

