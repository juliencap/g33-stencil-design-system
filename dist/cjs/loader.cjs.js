'use strict';

var index = require('./index-BRPZdW_o.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await index.globalScripts();
  return index.bootstrapLazy([["g33-alert_5.cjs",[[513,"g33-showcase",{"hero":[32]}],[513,"g33-article-card",{"postTitle":[1,"post-title"],"category":[1],"excerpt":[1],"imageUrl":[1,"image-url"],"author":[1],"publishedAt":[1,"published-at"],"publishedDateTime":[1,"published-date-time"],"showCta":[4,"show-cta"],"postUrl":[1,"post-url"]}],[513,"g33-hero-banner",{"titleText":[1,"title-text"],"subtitle":[1],"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"ctaLabel":[1,"cta-label"],"ctaUrl":[1,"cta-url"],"ctaTarget":[1,"cta-target"]}],[769,"g33-alert",{"type":[1]}],[769,"g33-button",{"variant":[1],"size":[1],"disabled":[4]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
