import { r as registerInstance, h } from './index-C0fy5Ulw.js';

const g33ContentCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.entry-title{font-weight:var(--g33-title-weight);line-height:1.2}.entry-content{line-height:var(--g33-line-height-default);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.entry-content p{margin-top:inherit}.post{max-width:720px}.featured-image img{width:100%;display:block}.cat-links::after{content:' · '}.entry-title a{color:var(--g33-color-secondary);text-decoration:none}.above-entry-meta{color:var(--g33-color-text-light);margin-top:var(--g33-spacing-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}.above-entry-meta{margin-bottom:0.75rem}.entry-header{margin-bottom:0.5rem}.entry-title{margin-bottom:0}`;

const G33ContentCard = class {
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
        return (h("article", { key: '6eee89fe1ca8e49ee921b5aa5f53db3fb2f7c2e5', class: "post actualite" }, h("div", { key: 'e6743491c8a2a27270134d1e8ec38a0045fbd630', class: "featured-image" }, h("a", { key: '2e2a940dbbaad7ea8762723bef7735067efa0189', href: this.postUrl }, h("img", { key: '1ca452c52f1430d7d4a3a07c4fc1ad8b50d06d3e', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: '5e492c841bf00d2063f3bc61c8c527709ce6925f', class: "article-content" }, h("div", { key: '5577f8e025f5ec8dcc3d57fd2a5440ad031dcde7', class: "above-entry-meta" }, h("span", { key: '5d4e97b07ea0c9cf36b0edf925ccb5d911320fb4', class: "cat-links" }, this.category), h("span", { key: '12967ff897ac83ca2cbde74ba677b1393933c6b7', class: "posted-on" }, h("time", { key: 'e564ef1cb70a95fa834f18c2697379200adf88de', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), h("header", { key: '8217307f9c7b12583ba1e749ae4408cac6f7dbe8', class: "entry-header" }, h("h2", { key: 'bc2a0acbb5cdd01e6656d15c9b9606f9d5b41bcd', class: "entry-title" }, h("a", { key: '13e14fb2b39bfab1ae203351c5d1356073eb04d6', href: this.postUrl }, this.postTitle))), h("div", { key: '921f28d1df13d64fca71af0d04356db952384598', class: "entry-content clearfix" }, this.excerpt && h("p", { key: '6a132cbec378b425cf4dbe6cb60032f58af42d37' }, this.excerpt), this.showCta && (h("a", { key: 'd57c590ae321ce55fc4d13fa9d2007aea7076ad7', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '3cd79ad85666f762641cac67312a9b9ae8008415', variant: "secondary" }, "Lire la suite")))))));
    }
};
G33ContentCard.style = g33ContentCardCss();

export { G33ContentCard as g33_content_card };
//# sourceMappingURL=g33-content-card.entry.esm.js.map

//# sourceMappingURL=g33-content-card.entry.js.map