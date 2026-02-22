# Country Info App

## Description
This application displays information about various countries, including their flags, capitals, populations, and regions. It fetches data from a public API to provide real-time country information.

## How to Run It

1. **Create a new Vite project (if you haven't already)**
    ```bash
    npx create-vite@latest country-info-app
    cd country-info-app
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the application**
    ```bash
    npm run dev
    ```

4. **Open in your browser**
   Navigate to `http://localhost:5173` to view the app.

## API Endpoints Used
This application uses the following API endpoint to fetch country data:

- **URL**: [REST Countries API]
- **Description**: This endpoint retrieves data for all countries, including names, capitals, populations, regions, and flag URLs.

## Screenshots

### Home Page
![Home Page](images/home.png)

### Results Page
![Results Page](images/result.png)

## Technologies Used
- Vite
- React
- JavaScript
- CSS

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
