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
        return (h("article", { key: 'dcfa4f41819146255f4671db74323fc4dac336ba', class: "post actualite" }, h("div", { key: '09e3fb0e175a6efbd1d63c69a27b917ffb38d7f8', class: "featured-image" }, h("a", { key: '583d4efd1ec306bf4ee882457f7d359259f625da', href: this.postUrl }, h("img", { key: 'b8aa20102c17d33ecc2c6f0c02daa4d2afe966db', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: '7d893a78f48cc35b0761f0332c006995f384b52f', class: "article-content" }, h("div", { key: '24f4a19248e288ff186fa121a626628efd2e8633', class: "above-entry-meta" }, h("span", { key: '17d35e4647f454af7e043e34ae3f6a7db0556ff3', class: "cat-links" }, this.category)), h("header", { key: 'c063992fd4fc7d3b6f6d857a81180c273cd410b9', class: "entry-header" }, h("h2", { key: 'fc195d7ddd7b5de91ce071e7bcc325b7d3820182', class: "entry-title" }, h("a", { key: '3903595bfeab83126d65e4ac0daf6225d7e432d1', href: this.postUrl }, this.postTitle))), h("div", { key: '551fabac0625ad40045ff72c56e7896865e99fcc', class: "below-entry-meta" }, h("span", { key: 'ecc2265135de908d8a7aae156615456b0c5de581', class: "posted-on" }, h("time", { key: 'ce547f00e78fc3265f79ea3a37a595148d0d3d2d', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt)), this.author && (h("span", { key: '2904cecca01158d5061bf4c5ff142fbb7844c788', class: "byline" }, h("span", { key: 'a8c3597520daada86ac64b4ff3421ab356aaa2e7', class: "author vcard" }, this.author)))), h("div", { key: 'bd26b5115a2e31f796d20b3d39765ae8341e7c22', class: "entry-content clearfix" }, this.excerpt && h("p", { key: '39026d4b00f75ca677a1ad6da604c72fe201b67c' }, this.excerpt), h("a", { key: 'ec2532eb6880ab4d9a7c7b5e42d3ab4e420193d4', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: 'c5eb0ec2be87973e363a79721322515dbade0df9', variant: "secondary" }, "Lire la suite"))))));
    }
};
G33ArticleCard.style = g33ArticleCardCss();

export { G33ArticleCard as g33_article_card };
//# sourceMappingURL=g33-article-card.entry.esm.js.map

//# sourceMappingURL=g33-article-card.entry.js.map