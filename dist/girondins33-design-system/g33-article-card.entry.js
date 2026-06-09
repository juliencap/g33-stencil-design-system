import { r as registerInstance, h } from './index-C0fy5Ulw.js';

const g33ArticleCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.entry-title{font-weight:var(--g33-title-weight);line-height:1.2}.entry-content{line-height:var(--g33-line-height-default);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.entry-content p{margin-top:inherit}.post{max-width:720px}.featured-image img{width:100%;display:block}.cat-links::after{content:' · '}.entry-title a{color:var(--g33-color-secondary);text-decoration:none}.above-entry-meta{color:var(--g33-color-text-light);margin-top:var(--g33-spacing-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}.above-entry-meta{margin-bottom:0.75rem}.entry-header{margin-bottom:0.5rem}.entry-title{margin-bottom:0}`;

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
    showCta = false;
    postUrl = '#';
    render() {
        return (h("article", { key: '6f71de3a245a5fc24cb37f2cb0df51fb0a4e6494', class: "post actualite" }, h("div", { key: '3a176c263e1f77b1cf488a6f916282d6a51d8eb0', class: "featured-image" }, h("a", { key: '9f9b9038ec99c6243d4d235c7e0c19038ac4de89', href: this.postUrl }, h("img", { key: '4f64c42cb4fffcad6d3f1a4eba689dded9035718', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: 'd8c3b29030941489f1512cecacbd4d562350d9c1', class: "article-content" }, h("div", { key: '6d7814759740bb7b6bf0e9c961507bfff7c740b3', class: "above-entry-meta" }, h("span", { key: 'fd13d5e97c9da815568f174ccfd37f7c77151463', class: "cat-links" }, this.category), h("span", { key: '756c6114ab911a789e44331a4b6070a64f53f08b', class: "posted-on" }, h("time", { key: '677fdb7fe3a887b9e060ae3a46b6db401c295846', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), h("header", { key: 'dbddf57c78aff3115f140a1599872a42bd6c15ac', class: "entry-header" }, h("h2", { key: 'a2014accfe05c3b7dab0c630593a8297df486957', class: "entry-title" }, h("a", { key: 'e57b13f98f09ac21667bd5fe0058c82eb8508bdd', href: this.postUrl }, this.postTitle))), h("div", { key: '48e9719f49e3b2ee8d11eaa4c5d5b0e3a657d1bd', class: "entry-content clearfix" }, this.excerpt && h("p", { key: 'ae9b15ee08ac2763cf6490b0b48c01fa9a2385db' }, this.excerpt), this.showCta && (h("a", { key: 'de76a9c488fffe39a4183c0b91476f9dd42c32c0', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: 'c3d8b6739eab7a7cda539462e4a69ee0bf582f53', variant: "secondary" }, "Lire la suite")))))));
    }
};
G33ArticleCard.style = g33ArticleCardCss();

export { G33ArticleCard as g33_article_card };
//# sourceMappingURL=g33-article-card.entry.esm.js.map

//# sourceMappingURL=g33-article-card.entry.js.map