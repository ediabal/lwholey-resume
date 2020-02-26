# gatsby-resume-site

Logan's Gatsby.js resume site.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

### TODO

Check online preview [here](https://anubhavsrivastava.github.io/gatsby-starter-resume/)

## Developing

Clone the repo then:

```sh
cd gatsby-resume-site
yarn install
gatsby develop
```

### Deploying

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `yarn run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.
