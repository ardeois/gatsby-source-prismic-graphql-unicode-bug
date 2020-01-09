# gatsby-source-prismic-graphql-unicode-bug

Simple project created using gatsby tutorial, with plugin [gatsby-source-prismic-graphql](https://www.gatsbyjs.org/packages/gatsby-source-prismic-graphql/)

It was created to reproduce an issue about page url (uid) containing unicode characters.

## Run locally

```shell
yarn

gatsby build

gatsby serve
```

- Click on link `Go to article WITHOUT no unicode issue`
  - Notice page is displayed properly
- Go back to home page and click on link `Go to article WITH unicode issue`
  - Notice it works like a charm !

