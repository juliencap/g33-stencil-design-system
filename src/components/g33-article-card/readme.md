# g33-article-card



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute             | Description | Type     | Default     |
| -------------------------- | --------------------- | ----------- | -------- | ----------- |
| `author`                   | `author`              |             | `string` | `undefined` |
| `category` _(required)_    | `category`            |             | `string` | `undefined` |
| `excerpt`                  | `excerpt`             |             | `string` | `undefined` |
| `imageUrl` _(required)_    | `image-url`           |             | `string` | `undefined` |
| `postTitle` _(required)_   | `post-title`          |             | `string` | `undefined` |
| `postUrl`                  | `post-url`            |             | `string` | `'#'`       |
| `publishedAt` _(required)_ | `published-at`        |             | `string` | `undefined` |
| `publishedDateTime`        | `published-date-time` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [g33-showcase](../g33-showcase)

### Depends on

- [g33-button](../g33-button)

### Graph
```mermaid
graph TD;
  g33-article-card --> g33-button
  g33-showcase --> g33-article-card
  style g33-article-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
