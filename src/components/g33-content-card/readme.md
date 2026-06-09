# g33-article-card



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute             | Description | Type      | Default     |
| --------------------------- | --------------------- | ----------- | --------- | ----------- |
| `author`                    | `author`              |             | `string`  | `undefined` |
| `category` _(required)_     | `category`            |             | `string`  | `undefined` |
| `contentTitle` _(required)_ | `content-title`       |             | `string`  | `undefined` |
| `contentUrl`                | `content-url`         |             | `string`  | `'#'`       |
| `excerpt`                   | `excerpt`             |             | `string`  | `undefined` |
| `imageUrl` _(required)_     | `image-url`           |             | `string`  | `undefined` |
| `publishedAt` _(required)_  | `published-at`        |             | `string`  | `undefined` |
| `publishedDateTime`         | `published-date-time` |             | `string`  | `undefined` |
| `showCta`                   | `show-cta`            |             | `boolean` | `false`     |


## Dependencies

### Used by

 - [g33-showcase](../g33-showcase)

### Depends on

- [g33-button](../g33-button)

### Graph
```mermaid
graph TD;
  g33-content-card --> g33-button
  g33-showcase --> g33-content-card
  style g33-content-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
