# React Survey - Nimble Internal Certification

This project is an internal certification proposed by [Nimble](https://nimblehq.co/).\
It enables me to level up with React and more (OAuth2.0, local application data, SPA, etc...).

## Development

### Clone the repository

**GitHub CLI**\
`gh repo clone malparty/react-survey`

**git cli**\
`git clone git@github.com:malparty/react-survey.git`

> ℹ️ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Watch

```shell
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Run the tests

```shell
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Lint

**TypeScript**

```shell
yarn lint
yarn lint:fix
```

See warnings and errors from eslint.\
The configuration is inherited from Create-React-App and override by [Nimble ES Lint config](https://www.npmjs.com/package/@nimblehq/eslint-config-nimble).

**SCSS**

```shell
yarn stylelint
yarn stylelint:fix
```

Similar functions for SCSS files using the [StyleLint plugin](https://stylelint.io/).

**Both**

```shell
yarn codebase:lint
yarn codebase:fix
```

To run both linters (eslint & stylelint).

## Build

```shell
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\

## License

This project is Copyright (c) 2014 and onwards. It is free software,
and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

![Nimble](https://assets.nimblehq.co/logo/dark/logo-dark-text-160.png)

This project is maintained and funded by Nimble.

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://github.com/nimblehq
[hire/jobs]: https://jobs.nimblehq.co/
[who we are]: https://nimblehq.co/
[LinkedIn]: https://www.linkedin.com/company/nimblehq
