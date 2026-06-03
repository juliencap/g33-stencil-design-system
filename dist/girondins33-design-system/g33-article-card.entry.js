import { r as registerInstance, h } from './index-C0fy5Ulw.js';

const g33ArticleCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.entry-title{font-weight:var(--g33-title-weight)}.entry-content{line-height:var(--g33-line-height-default)}.below-entry-meta{margin:var(--g33-spacing-sm) 0 var(--g33-spacing-md);color:var(--g33-color-text-light)}.post{max-width:720px}.featured-image img{width:100%;display:block}.cat-links{color:var(--g33-color-secondary)}.entry-title a{color:var(--g33-color-secondary);text-decoration:none}.above-entry-meta{margin-top:var(--g33-spacing-lg)}.posted-on{margin-right:var(--g33-spacing-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33ArticleCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("article", { key: 'f563286bd02859df0dd8f3470d32711aa1da96b2', class: "post actualite" }, h("div", { key: 'cd1c608e1e3b5648464779e2a90a0e3476831483', class: "featured-image" }, h("a", { key: '1f6c0686778e481116cb8d987fb9e0243dcee2b8', href: this.postUrl }, h("img", { key: 'fc514fa7ae8f22103623e1e65d5339a93ea93f25', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: '0c65f7ea044f6e023be1c2334c398744cdc760b0', class: "article-content" }, h("div", { key: '549a03a64d1e57b9a3b87793f6d4da6b33704b01', class: "above-entry-meta" }, h("span", { key: '5aa7b01eea289c18f63c9a36e0f7f8f3619c5f6f', class: "cat-links" }, this.category)), h("header", { key: 'd87a443bf7ada7efcacda08305a5230e691fbea1', class: "entry-header" }, h("h2", { key: 'fa3494d993b468328f01a52389aa075ce8cd68aa', class: "entry-title" }, h("a", { key: '9584a65f2d38bfa5f1a629e0567367e85bf70d13', href: this.postUrl }, this.postTitle))), h("div", { key: 'b819124d18464c8de959d5771be948906fd689c4', class: "below-entry-meta" }, h("span", { key: 'dfab9f92ff49120ded1502530e5ebd19d10b77ad', class: "posted-on" }, h("time", { key: '851fcde7ada134de234153377d8dd723901939cf', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt)), this.author && (h("span", { key: '122529558e0d73e8fe575e5b717620c1d08704ce', class: "byline" }, h("span", { key: 'ed8d2dda03b792d8f0a84e14b1af166f4c9e1723', class: "author vcard" }, this.author)))), h("div", { key: '2812634f102d7908e59883a0d9031053ce072b27', class: "entry-content clearfix" }, this.excerpt && h("p", { key: 'bfeeb6f2ca428eda292bc76863359d799e20b57c' }, this.excerpt), h("a", { key: '9aa2966c9527a19610061607c4341eae44c27269', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}` }, h("g33-button", { key: '32b4b6440863e420fff431b772dbef8cda33bde2', variant: "secondary" }, "Lire la suite"))))));
    }
};
G33ArticleCard.style = g33ArticleCardCss();

export { G33ArticleCard as g33_article_card };
//# sourceMappingURL=g33-article-card.entry.esm.js.map

//# sourceMappingURL=g33-article-card.entry.js.map