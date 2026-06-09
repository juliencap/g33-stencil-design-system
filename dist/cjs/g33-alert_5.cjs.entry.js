'use strict';

var index = require('./index-BRPZdW_o.js');

const g33AlertCss = () => `:host{display:block}.alert{padding:12px 16px;border-radius:6px;margin-bottom:12px;font-weight:500}.alert--info{background:#e8f4fd;color:#0c4a6e}.alert--success{background:#dcfce7;color:#166534}.alert--warning{background:#fef3c7;color:#92400e}.alert--error{background:#fee2e2;color:#991b1b}`;

const G33Alert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    type = 'info';
    render() {
        return (index.h("div", { key: '8cd9b2c749dcfde1c194bcdc179b49912270a2ac', class: `alert alert--${this.type}` }, index.h("slot", { key: '18cd88151df6804848b4bec05b81c16ad5398817' })));
    }
};
G33Alert.style = g33AlertCss();

const g33ArticleCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.entry-title{font-weight:var(--g33-title-weight);line-height:1.2}.entry-content{line-height:var(--g33-line-height-default);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.entry-content p{margin-top:inherit}.post{max-width:720px}.featured-image img{width:100%;display:block}.cat-links::after{content:' · '}.entry-title a{color:var(--g33-color-secondary);text-decoration:none}.above-entry-meta{color:var(--g33-color-text-light);margin-top:var(--g33-spacing-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}.above-entry-meta{margin-bottom:0.75rem}.entry-header{margin-bottom:0.5rem}.entry-title{margin-bottom:0}`;

const G33ArticleCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    postTitle;
    category;
    excerpt;
    imageUrl;
    author;
    publishedAt;
    publishedDateTime;
    showCta = false;
    postUrl = '#';
    render() {
        return (index.h("article", { key: '70d26f727ca34728bb687dd0ad6a205cb43c29cf', class: "post actualite" }, index.h("div", { key: 'e2d076bac72d1fbd4aaed245253b6abaa183e743', class: "featured-image" }, index.h("a", { key: 'dc0d7c04ef0d5a84f042fc6c7e79ce8b5665f16e', href: this.postUrl }, index.h("img", { key: 'addbe7e68d5cdbe2cb0b38a1e7e571f364cee1e4', src: this.imageUrl, alt: this.postTitle }))), index.h("div", { key: 'c0bf1c1c2f73e8ae9aa07915d5628d43d4b2eeac', class: "article-content" }, index.h("div", { key: 'ca0e6fbecea3755c83c60c203854feef129beeb9', class: "above-entry-meta" }, index.h("span", { key: '760744d46d6964510dcbe0356b209ccb2289ad82', class: "cat-links" }, this.category), index.h("span", { key: '32c088e6c585c5013f8d26345af9df532720201c', class: "posted-on" }, index.h("time", { key: '616627cd4ca3ef1262bf4538b91e4499ec5f42da', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), index.h("header", { key: '754184ec06ca4f6bb8083692f07fe08cc5839ab5', class: "entry-header" }, index.h("h2", { key: 'fabdcad27be3ff0c1e6c6ea346bb5aef7c3f11d3', class: "entry-title" }, index.h("a", { key: '2e46c208f972235c2925b93ee3b822eb81d1aee3', href: this.postUrl }, this.postTitle))), index.h("div", { key: '8bd9967e8a299a8e823e648cccb190081f68ce7f', class: "entry-content clearfix" }, this.excerpt && index.h("p", { key: '7c8b0ebdcc4f27e6f5d3e6d4d2dc5e1c28039faf' }, this.excerpt), this.showCta && (index.h("a", { key: 'a67b38e0204d8b914ec0355e02d0ca956c61d6d5', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, index.h("g33-button", { key: '2e817e291fe672ce7bb952fa66ea9a4baf2e7335', variant: "secondary" }, "Lire la suite")))))));
    }
};
G33ArticleCard.style = g33ArticleCardCss();

const g33ButtonCss = () => `:host{display:inline-block;font-family:var(--g33-font-family)}.button{border:0;border-radius:var(--g33-radius-md);padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-weight:var(--g33-font-weight-semibold);cursor:pointer;transition:background-color 0.2s ease,     border-color 0.2s ease,     color 0.2s ease}.button--primary{background:var(--g33-color-primary);color:var(--g33-color-white)}.button--primary:hover:not(:disabled){background:var(--g33-color-primary-hover)}.button--secondary{background:var(--g33-color-secondary);color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-secondary)}.button--secondary:hover:not(:disabled){opacity:0.9}.button--ghost{background:transparent;color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-white)}.button--ghost:hover:not(:disabled){background:var(--g33-color-white);color:var(--g33-color-primary)}.button:disabled{opacity:0.5;cursor:not-allowed}.button--sm{padding:var(--g33-spacing-xs) var(--g33-spacing-sm);font-size:var(--g33-font-size-xs)}.button--md{padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-size:var(--g33-font-size-sm)}.button--lg{padding:var(--g33-spacing-md) var(--g33-spacing-lg);font-size:var(--g33-font-size-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    variant = 'primary';
    size = 'md';
    disabled = false;
    render() {
        return (index.h("button", { key: '3eb297e3881c8672104ae672496db2bcbb41f16a', class: `button button--${this.variant} button--${this.size}`, disabled: this.disabled }, index.h("slot", { key: 'd2a1d748abf998770a960d6f0a419c0de8edc60c' })));
    }
};
G33Button.style = g33ButtonCss();

const g33HeroBannerCss = () => `:host{display:block;font-family:var(--g33-font-family)}.hero-banner{position:relative;min-height:400px;display:flex;align-items:center;overflow:hidden;border-radius:var(--g33-radius-lg)}.hero-banner__image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-banner__overlay{position:absolute;inset:0;background:rgba(0, 0, 0, 0.45)}.hero-banner__content{position:relative;z-index:1;padding:var(--g33-spacing-xl);color:var(--g33-color-white);max-width:700px}.hero-banner__content h1{margin:0 0 var(--g33-spacing-md);font-size:var(--g33-font-size-xl);font-weight:var(--g33-font-weight-black);line-height:1.1}.hero-banner__content p{margin:0 0 var(--g33-spacing-lg);font-size:var(--g33-font-size-md);line-height:var(--g33-line-height-default)}.hero-banner__content a{text-decoration:none}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33HeroBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    titleText;
    subtitle;
    imageUrl;
    imageAlt;
    ctaLabel;
    ctaUrl;
    ctaTarget;
    render() {
        return (index.h("section", { key: 'c86c6b25db71162594928fb049e0ee216c856a77', class: "hero-banner" }, this.imageUrl && index.h("img", { key: 'e4a3de35d6abf8a5230b5fd9ad72f15ee0dcdbd3', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), index.h("div", { key: 'bf8701115423e760bed94d5febe26d8e46518dc4', class: "hero-banner__overlay" }), index.h("div", { key: 'a007a027d48fd472fd97efd8e159d37b1a3afddd', class: "hero-banner__content" }, index.h("h1", { key: '373123d900c8a5709bbcf75b812b17301bb7a034' }, this.titleText), this.subtitle && index.h("p", { key: '63ac8f6043365b70f1139278ad51d92197c8e83d' }, this.subtitle), this.ctaUrl && this.ctaLabel && (index.h("a", { key: '495829fcc11e38873809b26afa2f9339c4adcce6', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, index.h("g33-button", { key: 'e8c0aa9594370dbdb964544d714482cf8a8244b1', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

const g33ShowcaseCss = () => `:host{display:block;font-family:var(--g33-font-family)}main{padding:32px}section{margin-top:32px}.demo-row{display:flex;gap:12px;margin-bottom:12px}g33-button{margin-right:12px}`;

const G33Showcase = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    hero;
    async componentWillLoad() {
        const token = index.Env.STORYBLOK_TOKEN;
        const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${token}`);
        const data = await response.json();
        this.hero = data.story.content.body.find(block => block.component === 'HeroBanner');
    }
    render() {
        return (index.h("main", { key: 'f6da821db435eebb0bfbaf8a6446307b3019289a' }, index.h("h1", { key: '73d884bcac910887f1819a91b35aa37c43e5b080' }, "G33 Design System"), index.h("section", { key: 'cc321cfc13568b97fd3ad345b0545c94b1017af3' }, index.h("h2", { key: 'fa8ca086b14887e909971296974f7db15412c7bf' }, "Buttons"), index.h("div", { key: 'dcf22ae4aee99b354ee60e73754c8f46ae4e8e73', class: "demo-row" }, index.h("g33-button", { key: '297427717aa77a412b88e04b7e5d0f30d972d838', size: "sm" }, "Petit"), index.h("g33-button", { key: 'e98fe062a9e457775883a5edc021407e27f246c6', size: "md" }, "Moyen"), index.h("g33-button", { key: '5d15b7d2a81fb2b5e6830174d48f9fb8c4d8f896', size: "lg" }, "Grand")), index.h("div", { key: '2277f6368add1ed17b3d0b72b767aa51df9c753f', class: "demo-row" }, index.h("g33-button", { key: '6a02d3551eef52ee854f886350914064ee2e0644', variant: "secondary" }, "Secondaire"), index.h("g33-button", { key: '1522b4fe5bf7bb07a5459d2ea5c5148e19a1d88e', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), index.h("section", { key: 'ffe7f7ef50978515d8cbf256c97d6cec1e28bea9' }, index.h("h2", { key: 'e3650ff284a233a8fccf8d36dfee5904cff2a055' }, "Alerts"), index.h("g33-alert", { key: '30cd4a0521dcef1d1325116a66484ed35485cb6b', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), index.h("g33-alert", { key: '9f04fed866d6e67dd01975c8d46774dd414de6b5', type: "warning" }, "Article en cours d'\u00E9dition"), index.h("g33-alert", { key: '3a4fcb2504a9a35f2ff9949a429008b152b5bac1', type: "error" }, "Article supprim\u00E9")), index.h("section", { key: 'fe7da1c389ccd7ffc5e3ba742c614ffd24eff369' }, index.h("h2", { key: '45ec74595e98b849f4c9059658d987e143c38669' }, "Article card"), index.h("g33-article-card", { key: '06efe7fdd85b16b71bfce18a8c64f6157ee71835', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), index.h("section", { key: '5c7abdcf87b24a999b2d8d3164236f41cbd156db' }, index.h("h2", { key: '157e4cde60a85671d70dc04d6e06c33e4c74580d' }, "Hero simple"), index.h("g33-hero-banner", { key: '76af0fafb762c49a2abfa50ce2d28829d75bc282', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), index.h("h2", { key: '20b06be207751e359600da6163bb39eaff5939bd' }, "Hero avec sous-titre"), index.h("g33-hero-banner", { key: '39f8ad07b1195d648fe0c24fca8248d24e394ac4', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), index.h("h2", { key: '0a806564e39d50a7ef5f9808c44dd71af01451c7' }, "Hero"), index.h("g33-hero-banner", { key: '6e0fb53801038d529aea0b8d737f307186f5f8ee', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
    }
};
G33Showcase.style = g33ShowcaseCss();

exports.g33_alert = G33Alert;
exports.g33_article_card = G33ArticleCard;
exports.g33_button = G33Button;
exports.g33_hero_banner = G33HeroBanner;
exports.g33_showcase = G33Showcase;
