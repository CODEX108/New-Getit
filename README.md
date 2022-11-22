# Github Finder App
A React app to search GitHub profiles and see profile details. This project is part of the 

## TECH STACK
- REACT JS
- Axios
- Tailwind CSS
- [Daisy UI (The most popular, free and open-source Tailwind CSS component library)](daisyui.com)
- Netlify


### Setting Up react app

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
