# React.ts App for Archer clubs and sportsmen

## Stack

- MaterialUI
- ReduxToolkit
- react-hot-toast
- axios
- React Query

## CLient storage

# localStorage

isLoggedIn - true|false
JWTkey - string

# redux

## To Do

install Config and check :

- React Query

закомитить как стартовый тимплейт

- add default UI components as Shared folder

закомитить как начало работы с UI

- настроить и попробовать Vitest
  (спросить GPT как тестировать, в чем заключаеться суть тестов и на какие процессы можно разделить, дать ему компонент на пробу для теста)

- Config App Routing

как тестить такое спросить у GPT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
