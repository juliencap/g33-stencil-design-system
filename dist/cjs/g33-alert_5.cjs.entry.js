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

const g33ArticleCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.entry-title{font-weight:var(--g33-title-weight)}.entry-content{line-height:var(--g33-line-height-default)}.below-entry-meta{margin:var(--g33-spacing-sm) 0 var(--g33-spacing-md);color:var(--g33-color-text-light)}.post{max-width:720px}.featured-image img{width:100%;display:block}.cat-links{color:var(--g33-color-secondary)}.entry-title a{color:var(--g33-color-secondary);text-decoration:none}.above-entry-meta{margin-top:var(--g33-spacing-lg)}.posted-on{margin-right:var(--g33-spacing-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

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
    postUrl = '#';
    render() {
        return (index.h("article", { key: 'f563286bd02859df0dd8f3470d32711aa1da96b2', class: "post actualite" }, index.h("div", { key: 'cd1c608e1e3b5648464779e2a90a0e3476831483', class: "featured-image" }, index.h("a", { key: '1f6c0686778e481116cb8d987fb9e0243dcee2b8', href: this.postUrl }, index.h("img", { key: 'fc514fa7ae8f22103623e1e65d5339a93ea93f25', src: this.imageUrl, alt: this.postTitle }))), index.h("div", { key: '0c65f7ea044f6e023be1c2334c398744cdc760b0', class: "article-content" }, index.h("div", { key: '549a03a64d1e57b9a3b87793f6d4da6b33704b01', class: "above-entry-meta" }, index.h("span", { key: '5aa7b01eea289c18f63c9a36e0f7f8f3619c5f6f', class: "cat-links" }, this.category)), index.h("header", { key: 'd87a443bf7ada7efcacda08305a5230e691fbea1', class: "entry-header" }, index.h("h2", { key: 'fa3494d993b468328f01a52389aa075ce8cd68aa', class: "entry-title" }, index.h("a", { key: '9584a65f2d38bfa5f1a629e0567367e85bf70d13', href: this.postUrl }, this.postTitle))), index.h("div", { key: 'b819124d18464c8de959d5771be948906fd689c4', class: "below-entry-meta" }, index.h("span", { key: 'dfab9f92ff49120ded1502530e5ebd19d10b77ad', class: "posted-on" }, index.h("time", { key: '851fcde7ada134de234153377d8dd723901939cf', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt)), this.author && (index.h("span", { key: '122529558e0d73e8fe575e5b717620c1d08704ce', class: "byline" }, index.h("span", { key: 'ed8d2dda03b792d8f0a84e14b1af166f4c9e1723', class: "author vcard" }, this.author)))), index.h("div", { key: '2812634f102d7908e59883a0d9031053ce072b27', class: "entry-content clearfix" }, this.excerpt && index.h("p", { key: 'bfeeb6f2ca428eda292bc76863359d799e20b57c' }, this.excerpt), index.h("a", { key: 'be9afd602ae00044948bf7531d543ef09c9736cd', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, index.h("g33-button", { key: '9f5a058620ded733d77b4381b036b56b42924520', variant: "secondary" }, "Lire la suite"))))));
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
        return (index.h("button", { key: 'b3ff1af4c20992abdabaf71cec783be44923265a', class: `button button--${this.variant} button--${this.size}`, disabled: this.disabled }, index.h("slot", { key: 'ad765431fddd24526285f937504bd79b4e01a688' })));
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
        return (index.h("section", { key: 'f1e5fe75fb6e353d3ea31f6c133048320e2ec9e0', class: "hero-banner" }, this.imageUrl && index.h("img", { key: '6c6afe4b4e76ad364cd85ba75cd759d9aa58414d', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), index.h("div", { key: 'd8a212d6d08e3fb9043248c765888abbc362e2fe', class: "hero-banner__overlay" }), index.h("div", { key: '1ea7cb775879ae1663ec5ab79be740246a2ec8be', class: "hero-banner__content" }, index.h("h1", { key: '866dccc21d1e9a8c2d31113e7043792e9e112f0a' }, this.titleText), this.subtitle && index.h("p", { key: '0aa8b338cbf0042dfc001532bbe6b1641867dbae' }, this.subtitle), this.ctaUrl && this.ctaLabel && (index.h("a", { key: '58201f20ea96513117ae32342ad406a7a01df8b8', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, index.h("g33-button", { key: '7830318ed01b922f4b679d089a429d5ea81092c4', variant: "ghost" }, this.ctaLabel))))));
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
        return (index.h("main", { key: '14ef0cdcb896aafa47d5f91629cbd0612b2c9a93' }, index.h("h1", { key: '5505a93c66dda4fe7318e89ce487ac4e0f847d56' }, "G33 Design System"), index.h("section", { key: '28a0b582fcd03fe879caed2a0a4f806f00c85bc3' }, index.h("h2", { key: '6200a707e29fa2d4ccc09f690ba6b8f24eeb5811' }, "Buttons"), index.h("div", { key: 'a5120e8a54d3304fb41f4dad9a0a05dc641a0479', class: "demo-row" }, index.h("g33-button", { key: 'cbeb7b3986817291e49baf34121df0f6c126160f', size: "sm" }, "Petit"), index.h("g33-button", { key: '7855553748e9d6febbd4543ff86138fdc45e54e9', size: "md" }, "Moyen"), index.h("g33-button", { key: 'b8163bcade04004a0609ba4b56d91ca2f74384be', size: "lg" }, "Grand")), index.h("div", { key: 'acfd56dbbb5497c3bb2e6f1d9d429332c01bf6be', class: "demo-row" }, index.h("g33-button", { key: 'a9478111308bc1f092d4f1039bceeb39dd0da72e', variant: "secondary" }, "Secondaire"), index.h("g33-button", { key: '0cf2b15a09dc943237c7b0cf56c91c44f4adfe18', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), index.h("section", { key: '570df7f6b4a63a45003409e7c84e436dca70a8f5' }, index.h("h2", { key: 'beb973b19aa28b6e7199acc47864faee2021d47d' }, "Alerts"), index.h("g33-alert", { key: '3c84533e2b638d2484a32591b56217e5a704c99c', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), index.h("g33-alert", { key: '893289bf3b53258440c75aab532e373fee62a787', type: "warning" }, "Article en cours d'\u00E9dition"), index.h("g33-alert", { key: '7b2a401dd523d0027934a5bb3c198f0f6dbcc4da', type: "error" }, "Article supprim\u00E9")), index.h("section", { key: 'c534cb55dd1a34484e1a0637b6bc9ea2e3fee034' }, index.h("h2", { key: 'e24eca4fec9717f22b9b0e2ed744428ec1db7358' }, "Article card"), index.h("g33-article-card", { key: '934339dd1cb5fd4edcb8fe5bd616bd6b174ca7ff', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), index.h("section", { key: 'a3e94c681e12b2be684719436e1a18227e7f19c9' }, index.h("h2", { key: '868e448730afcd9a5a23f1186aacd80993ee0cf1' }, "Hero simple"), index.h("g33-hero-banner", { key: 'f86bf6634c95663d7d218acda2230f3a2dcfeb04', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), index.h("h2", { key: '576b5bdc57c011459d7bd504a91e2f32dc144511' }, "Hero avec sous-titre"), index.h("g33-hero-banner", { key: 'fae1787098c50df5b0a247cc041c7afc4199aebd', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), index.h("h2", { key: '75f6caa3fd7040a14f36c69c2923e8df8f586ea0' }, "Hero"), index.h("g33-hero-banner", { key: '0a108846fd5a6bb71a25135c93e43ea7d5e3e616', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
    }
};
G33Showcase.style = g33ShowcaseCss();

exports.g33_alert = G33Alert;
exports.g33_article_card = G33ArticleCard;
exports.g33_button = G33Button;
exports.g33_hero_banner = G33HeroBanner;
exports.g33_showcase = G33Showcase;
