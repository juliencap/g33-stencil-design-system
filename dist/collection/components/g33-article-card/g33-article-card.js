import { h } from "@stencil/core";
export class G33ArticleCard {
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
        return (h("article", { key: '70d26f727ca34728bb687dd0ad6a205cb43c29cf', class: "post actualite" }, h("div", { key: 'e2d076bac72d1fbd4aaed245253b6abaa183e743', class: "featured-image" }, h("a", { key: 'dc0d7c04ef0d5a84f042fc6c7e79ce8b5665f16e', href: this.postUrl }, h("img", { key: 'addbe7e68d5cdbe2cb0b38a1e7e571f364cee1e4', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: 'c0bf1c1c2f73e8ae9aa07915d5628d43d4b2eeac', class: "article-content" }, h("div", { key: 'ca0e6fbecea3755c83c60c203854feef129beeb9', class: "above-entry-meta" }, h("span", { key: '760744d46d6964510dcbe0356b209ccb2289ad82', class: "cat-links" }, this.category), h("span", { key: '32c088e6c585c5013f8d26345af9df532720201c', class: "posted-on" }, h("time", { key: '616627cd4ca3ef1262bf4538b91e4499ec5f42da', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), h("header", { key: '754184ec06ca4f6bb8083692f07fe08cc5839ab5', class: "entry-header" }, h("h2", { key: 'fabdcad27be3ff0c1e6c6ea346bb5aef7c3f11d3', class: "entry-title" }, h("a", { key: '2e46c208f972235c2925b93ee3b822eb81d1aee3', href: this.postUrl }, this.postTitle))), h("div", { key: '8bd9967e8a299a8e823e648cccb190081f68ce7f', class: "entry-content clearfix" }, this.excerpt && h("p", { key: '7c8b0ebdcc4f27e6f5d3e6d4d2dc5e1c28039faf' }, this.excerpt), this.showCta && (h("a", { key: 'a67b38e0204d8b914ec0355e02d0ca956c61d6d5', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '2e817e291fe672ce7bb952fa66ea9a4baf2e7335', variant: "secondary" }, "Lire la suite")))))));
    }
    static get is() { return "g33-article-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["g33-article-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["g33-article-card.css"]
        };
    }
    static get properties() {
        return {
            "postTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "post-title"
            },
            "category": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "category"
            },
            "excerpt": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "excerpt"
            },
            "imageUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-url"
            },
            "author": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "author"
            },
            "publishedAt": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "published-at"
            },
            "publishedDateTime": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "published-date-time"
            },
            "showCta": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-cta",
                "defaultValue": "false"
            },
            "postUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "post-url",
                "defaultValue": "'#'"
            }
        };
    }
}
