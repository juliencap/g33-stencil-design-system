'use strict';

var index = require('./index-BRPZdW_o.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.43.5 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('girondins33-design-system.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await index.globalScripts();
  return index.bootstrapLazy([["g33-alert_5.cjs",[[513,"g33-showcase",{"hero":[32]}],[513,"g33-article-card",{"postTitle":[1,"post-title"],"category":[1],"excerpt":[1],"imageUrl":[1,"image-url"],"author":[1],"publishedAt":[1,"published-at"],"publishedDateTime":[1,"published-date-time"],"showCta":[4,"show-cta"],"postUrl":[1,"post-url"]}],[513,"g33-hero-banner",{"titleText":[1,"title-text"],"subtitle":[1],"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"ctaLabel":[1,"cta-label"],"ctaUrl":[1,"cta-url"],"ctaTarget":[1,"cta-target"]}],[769,"g33-alert",{"type":[1]}],[769,"g33-button",{"variant":[1],"size":[1],"disabled":[4]}]]],["g33-content-card.cjs",[[513,"g33-content-card",{"postTitle":[1,"post-title"],"category":[1],"excerpt":[1],"imageUrl":[1,"image-url"],"author":[1],"publishedAt":[1,"published-at"],"publishedDateTime":[1,"published-date-time"],"showCta":[4,"show-cta"],"postUrl":[1,"post-url"]}]]]], options);
});

exports.setNonce = index.setNonce;
