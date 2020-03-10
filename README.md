# lwholey-resume

Logan's Gatsby.js resume site.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

Check online preview [here](https://ediabal.github.io/lwholey-resume/)

## Developing

Clone the repo then:

```sh
cd lwholey-resume
yarn install
yarn develop
```

### Deploying

This project deploys by publishing to Github pages.

To deploy, make sure you're in master and have the latest, then:

```sh
yarn build
yarn serve # checkout http://localhost:9000/ and make sure everything is in order
yarn deploy
```

### Updating static resume PDF

To update the static resume PDF file navigate to `/pdf` and download a fresh copy of the resume to `assets/pdf` and make sure it is named `resume.pdf`.
