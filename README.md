# Front-End Project

This project is a front-end application developed using ReactJS and JavaScript, based on a Figma design.

## Project Structure

The repository is organized as follows:

- **public/**: Contains static assets and the main HTML file.
- **src/**: Contains the React components and main application logic.
- **eslint.config.js**: Configuration file for ESLint to maintain code quality.
- **index.html**: The main HTML file.
- **package-lock.json**: Automatically generated file that describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
- **package.json**: Contains metadata about the project and its dependencies.
- **postcss.config.js**: Configuration file for PostCSS.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **vite.config.js**: Configuration file for Vite.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/birbal3/front-end-project.git
   cd front-end-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

This will launch the application, and you can view it in your browser at `http://localhost:3000` (or the port specified in your Vite configuration).

## Building for Production

To build the application for production:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

## Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
