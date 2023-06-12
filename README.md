# tailwindcss-components
技术栈为Vite+Vue3
使用tailwindcss搭建一套组件库

项目上初始化

npm create vite@latest my-project -- --template vue
cd my-project

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev
