import { r as registerInstance, h, E as Env } from './index-DjZtJWUp.js';

const g33AlertCss = () => `:host{display:block}.alert{padding:12px 16px;border-radius:6px;margin-bottom:12px;font-weight:500}.alert--info{background:#e8f4fd;color:#0c4a6e}.alert--success{background:#dcfce7;color:#166534}.alert--warning{background:#fef3c7;color:#92400e}.alert--error{background:#fee2e2;color:#991b1b}`;

const G33Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    type = 'info';
    render() {
        return (h("div", { key: '8cd9b2c749dcfde1c194bcdc179b49912270a2ac', class: `alert alert--${this.type}` }, h("slot", { key: '18cd88151df6804848b4bec05b81c16ad5398817' })));
    }
};
G33Alert.style = g33AlertCss();

const g33ButtonCss = () => `:host{display:inline-block;font-family:var(--g33-font-family)}.button{border:0;border-radius:var(--g33-radius-md);padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-weight:var(--g33-font-weight-semibold);cursor:pointer;transition:background-color 0.2s ease,     border-color 0.2s ease,     color 0.2s ease}.button--primary{background:var(--g33-color-primary);color:var(--g33-color-white)}.button--primary:hover:not(:disabled){background:var(--g33-color-primary-hover)}.button--secondary{background:var(--g33-color-secondary);color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-secondary)}.button--secondary:hover:not(:disabled){opacity:0.9}.button--ghost{background:transparent;color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-white)}.button--ghost:hover:not(:disabled){background:var(--g33-color-white);color:var(--g33-color-primary)}.button:disabled{opacity:0.5;cursor:not-allowed}.button--sm{padding:var(--g33-spacing-xs) var(--g33-spacing-sm);font-size:var(--g33-font-size-xs)}.button--md{padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-size:var(--g33-font-size-sm)}.button--lg{padding:var(--g33-spacing-md) var(--g33-spacing-lg);font-size:var(--g33-font-size-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    variant = 'primary';
    size = 'md';
    disabled = false;
    render() {
        return (h("button", { key: '85fd2b7542cd3afcc865f9eb55d065e952f9877b', class: `button button--${this.variant} button--${this.size}`, disabled: this.disabled }, h("slot", { key: '55e71fcd08a8f65a075029f7d58a6de63ae11d89' })));
    }
};
G33Button.style = g33ButtonCss();

const g33ContentCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.post{max-width:720px}.featured-image img{width:100%;display:block}.meta{color:var(--g33-color-text-light);margin-top:var(--g33-spacing-md);margin-bottom:var(--g33-spacing-sm)}.category::after{content:'•';margin-left:var(--g33-spacing-xs);margin-right:var(--g33-spacing-xs)}.entry-date{color:var(--g33-color-text-light)}.entry-header{margin-bottom:var(--g33-spacing-sm)}.entry-title{margin-bottom:0;font-weight:var(--g33-font-weight-bold);line-height:1.2}.entry-title a{color:inherit;text-decoration:none}.entry-content{line-height:var(--g33-line-height-default)}.entry-excerpt{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:0}.entry-cta{display:inline-block;margin-top:var(--g33-spacing-md);text-decoration:none}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33ContentCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    contentTitle;
    category;
    excerpt;
    imageUrl;
    author;
    publishedAt;
    publishedDateTime;
    showCta = false;
    contentUrl = '#';
    render() {
        return (h("article", { key: '8c8b078bb195790dfa7b6b25f779e764bd159e78', class: "post actualite" }, h("div", { key: 'd64d7e9606a2e6ba9153b487a0731eab0a8d9846', class: "featured-image" }, h("a", { key: 'cc099274d847dea82a861bcd27613c514e5d71ba', href: this.contentUrl }, h("img", { key: 'f5c3cd5b6317c4af4560598c53a93e9efe47093c', src: this.imageUrl, alt: this.contentTitle }))), h("div", { key: '739192c68b340f9655ca67334ace77de8953d963', class: "article-content" }, h("div", { key: 'b0613753cfeb8b1504b591f6d423068ea4d257f9', class: "meta" }, h("span", { key: 'b0012ab004a07af80688f77e6c6ab4e5a1acb2b0', class: "category" }, this.category), h("time", { key: '311874ab6cad892e5cd3ab624f79ff3ab99e9b80', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt)), h("header", { key: '328541b7f2cf4a60fbda33aacf5f735948b577ac', class: "entry-header" }, h("h2", { key: '5a0779ec309b778c894f8e2329e1eec7786f1d44', class: "entry-title" }, h("a", { key: '7ff3ed5741ce3045a72cbad2fef61fc33e8a27a5', href: this.contentUrl }, this.contentTitle))), h("div", { key: 'b016a3066d09c9987841526ea89f4a6ddd3ea91b', class: "entry-content clearfix" }, this.excerpt && h("p", { key: '7ab01d040e856f0f5f227cce5f0eef4393c945ee', class: "entry-excerpt" }, this.excerpt), this.showCta && (h("a", { key: '4817710a6f3e56c4a19cbe725697caf197ccb2a8', class: "entry-cta", href: this.contentUrl, "aria-label": `Lire la suite : ${this.contentTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '6840cc1c377487ac630e0097bd04a58ef9a35495', variant: "secondary" }, "Lire la suite")))))));
    }
};
G33ContentCard.style = g33ContentCardCss();

const g33ContentListItemCss = () => `:host{display:block}a{text-decoration:none;color:inherit}.meta{font-size:var(--g33-font-size-sm);color:var(--g33-color-text-light);margin-bottom:var(--g33-spacing-sm)}.entry-date{color:var(--g33-color-text-light)}.title{font-size:var(--g33-font-size-md);font-weight:var(--g33-font-weight-regular);line-height:var(--g33-line-height-default);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.category::before{content:'•';margin-left:var(--g33-spacing-xs);margin-right:var(--g33-spacing-xs)}`;

const G33ContentListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    displayDate;
    publishedDateTime;
    category;
    contentTitle;
    contentUrl;
    render() {
        return (h("a", { key: 'e16ec3a37c500f56b49b016d919a95821bee8c5a', href: this.contentUrl, "aria-label": this.contentTitle }, h("div", { key: '3f5f0907c6cf8330537be3eead6f634f2626cb6a', class: "meta" }, h("time", { key: 'b3bb979c272854e478be0c8eaddd55214a376958', class: "entry-date", dateTime: this.publishedDateTime }, this.displayDate), h("span", { key: 'd8082e4071a143b9143b63f32f0e96fdb004769e', class: "category" }, this.category)), h("div", { key: '178a10c3b83a223abf05beb0613f7790008a0286', class: "title" }, this.contentTitle)));
    }
};
G33ContentListItem.style = g33ContentListItemCss();

const g33HeroBannerCss = () => `:host{display:block;font-family:var(--g33-font-family)}.hero-banner{position:relative;min-height:400px;display:flex;align-items:center;overflow:hidden;border-radius:var(--g33-radius-lg)}.hero-banner__image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-banner__overlay{position:absolute;inset:0;background:rgba(0, 0, 0, 0.45)}.hero-banner__content{position:relative;z-index:1;padding:var(--g33-spacing-xl);color:var(--g33-color-white);max-width:700px}.hero-banner__content h1{margin:0 0 var(--g33-spacing-md);font-size:var(--g33-font-size-xl);font-weight:var(--g33-font-weight-black);line-height:1.1}.hero-banner__content p{margin:0 0 var(--g33-spacing-lg);font-size:var(--g33-font-size-md);line-height:var(--g33-line-height-default)}.hero-banner__content a{text-decoration:none}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33HeroBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    titleText;
    subtitle;
    imageUrl;
    imageAlt;
    ctaLabel;
    ctaUrl;
    ctaTarget;
    render() {
        return (h("section", { key: 'e42e070da84c311edb72b82b191804cbd7707dc4', class: "hero-banner" }, this.imageUrl && h("img", { key: '87f5b4713a7c3b296dd864754b30309988b6b0e5', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: 'a1234c59fbc5f363b8094229eb52a228239336ca', class: "hero-banner__overlay" }), h("div", { key: '35a07e4142b2d33d61897aa49bb72205711ee106', class: "hero-banner__content" }, h("h1", { key: '2f92bc4a384e7977faecd28bbf6a891b8c8f80f8' }, this.titleText), this.subtitle && h("p", { key: '2fdb74827d270123999d5d11b8f30ad9a7f9ae73' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '20e409a09fa6768bc00e752ca3a9cc3033f5bd1d', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '5123eb69dea4111538df94caf35eb0500d337ad1', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

const g33ShowcaseCss = () => `:host{display:block;font-family:var(--g33-font-family)}main{padding:32px}section{margin-top:32px}.demo-row{display:flex;gap:12px;margin-bottom:12px}g33-button{margin-right:12px}`;

const G33Showcase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hero;
    async componentWillLoad() {
        const token = Env.STORYBLOK_TOKEN;
        const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${token}`);
        const data = await response.json();
        this.hero = data.story.content.body.find(block => block.component === 'HeroBanner');
    }
    render() {
        return (h("main", { key: '62f656a261ee4406e0a8101cca6873722cfc18df' }, h("h1", { key: 'c0349cbe5da74876848727922c82aeb14d70de97' }, "G33 Design System"), h("section", { key: 'fb4a4f1811b35aa0c60126719cdfc40f8e38f9d2' }, h("h2", { key: 'f7c60dd4459f63a2f4609009f84d414481c79f8e' }, "Buttons"), h("div", { key: 'e1345f095fb27b2c384133fb3847d9be46f3c1c1', class: "demo-row" }, h("g33-button", { key: '56d9c86a17de5add6af7e11a007df1b057c8fb16', size: "sm" }, "Petit"), h("g33-button", { key: '32d93dd1895657ebee202ccb467b4d0c464dbc2c', size: "md" }, "Moyen"), h("g33-button", { key: 'cc7ca213a573c0f812d4f401a14b974d9de67920', size: "lg" }, "Grand")), h("div", { key: '78a7f9dd05060072eb4e41dc9b0a49f1b0cd48e2', class: "demo-row" }, h("g33-button", { key: '895e25c9cb496499241e9f67995f9a99c032f901', variant: "secondary" }, "Secondaire"), h("g33-button", { key: '5237aa114b4c482d662749225102f1d9b1b68d4a', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: 'beefa3606bc5bc3ff31660c40828ed1494f0e8c8' }, h("h2", { key: '2cdb2a83c09637c3894b270752163c65ca715133' }, "Alerts"), h("g33-alert", { key: 'c6384ba77d9c474271713f7eb9b3d6bd9b0af5ec', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: 'd8dc2fedd838fd046771f1aaa875f49af9928df1', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: 'a74f46aea063003012ae7443eb78ad660f2a8876', type: "error" }, "Article supprim\u00E9")), h("section", { key: '659226d6e20a24db292774f29c60a535e38f2e93' }, h("h2", { key: '8c7e4123441c1ecf65419bcfea3a4fca156e028a' }, "Content card"), h("g33-content-card", { key: 'f708a36e6faa556ab503c185218dc5db7a458010', contentTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", contentUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: 'd81f8635a7b494d9a776aeb2a5e9cea8d6340b6c' }, h("h2", { key: '22eebbe64da4a99aae823c36ecfd336cd14d2355' }, "Content List Item"), h("g33-content-list-item", { key: 'a1e108906656e5cb6ba484b2c8ae1baeee90ed97', contentTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", displayDate: "27/02", publishedDateTime: "2025-02-27", contentUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), this.hero && (h("section", { key: '19946dd73a5ce2fd343f8ce2f281d6061c8cea66' }, h("h2", { key: '51cda458fbced6d8cb9c7a55afbb4c14a713ad31' }, "Hero Banner / Storyblok"), h("h3", { key: '1fb544c81066ec7a7669436c4aeae0dcbb392199' }, "Simple"), h("g33-hero-banner", { key: '5b3bd67babb56f1596b4fc57d92be6c3dde7a79c', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h3", { key: '0cc67182abb755c9f2357413420c9c838b1f65b0' }, "Avec sous-titre"), h("g33-hero-banner", { key: '53bf5227e81eefe374d9023f9481c1d70a90d7a5', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h3", { key: '90ba0a4d7dde963421bc803cfc9e63dd68fd327f' }, "Complet"), h("g33-hero-banner", { key: '1830bcbb66f623e82e4f0dcd74bca68227f2295e', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target })))));
    }
};
G33Showcase.style = g33ShowcaseCss();

export { G33Alert as g33_alert, G33Button as g33_button, G33ContentCard as g33_content_card, G33ContentListItem as g33_content_list_item, G33HeroBanner as g33_hero_banner, G33Showcase as g33_showcase };
