# Personal Website

A personal website built with Vue.js, showcasing my portfolio and resume. This project leverages modern web development practices to create a dynamic, responsive, and multilingual user interface.

## Features

- **Dynamic User Interface**: Utilizes Vue.js component architecture.
- **Seamless Navigation**: Integrated with Vue Router.
- **State Management**: Managed with Pinia for efficient data flow.
- **Responsive Design**: Styled using Bootstrap.
- **Multilingual Support**: Enabled with vue-i18n.

## Technologies Used

- **Vue.js**: JavaScript framework for building user interfaces.
- **Vue Router**: The official router for Vue.js.
- **Pinia**: Store for Vue.js.
- **Bootstrap**: CSS framework for responsive design.
- **vue-i18n**: Internationalization plugin for Vue.js.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:JuiHsuanLee0303/personal-website.git
   cd personal-website
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```sh
npm run serve
# or
yarn serve
```

The app will be available at `http://localhost:8080`.

### Linting

To lint and fix files:

```sh
npm run lint
# or
yarn lint
```

### Build

To build the project for production:

```sh
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## Project Structure

- **src/**: Main source folder
  - **assets/**: Static assets
  - **components/**: Vue components
  - **router/**: Vue Router setup
  - **store/**: Pinia store setup
  - **views/**: View components
  - **App.vue**: Root component
  - **main.js**: Entry point

## Contributing

If you have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
