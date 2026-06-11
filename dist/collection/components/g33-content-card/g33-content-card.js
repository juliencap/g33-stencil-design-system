import { h } from "@stencil/core";
export class G33ContentCard {
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
        return (h("article", { key: '8c8b078bb195790dfa7b6b25f779e764bd159e78', class: "post actualite" }, h("div", { key: 'd64d7e9606a2e6ba9153b487a0731eab0a8d9846', class: "featured-image" }, h("a", { key: 'cc099274d847dea82a861bcd27613c514e5d71ba', href: this.contentUrl }, h("img", { key: 'f5c3cd5b6317c4af4560598c53a93e9efe47093c', src: this.imageUrl, alt: this.contentTitle }))), h("div", { key: '739192c68b340f9655ca67334ace77de8953d963', class: "article-content" }, h("div", { key: 'b0613753cfeb8b1504b591f6d423068ea4d257f9', class: "meta" }, this.category && h("span", { key: '623c4bd286dce00c8fb5cb8f003fdbb6475b98a9', class: "category" }, this.category), h("time", { key: '7ad3670fd2db1f2ca3108ec5457632106986a92c', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt)), h("header", { key: '54dd2d6df9cefbcb65c617b942789e2971e9dab0', class: "entry-header" }, h("h2", { key: 'ac455736ddd0d0d240fcd5019577955c21855fd5', class: "entry-title" }, h("a", { key: '14e1f8f82607cffd1088772f2b94cb9d8d0db11c', href: this.contentUrl }, this.contentTitle))), h("div", { key: '76213a8acf9ce32c96ba4830df889391c5213af9', class: "entry-content clearfix" }, this.excerpt && h("p", { key: '4560e16e52d3b5070beea9fd01d8919f9b9e880c', class: "entry-excerpt" }, this.excerpt), this.showCta && (h("a", { key: '5b89a358c80dee27e48c656ffa76fa2d20d53f59', class: "entry-cta", href: this.contentUrl, "aria-label": `Lire la suite : ${this.contentTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '376f6870c1c41278581074c1e748ac79e22e8611', variant: "secondary" }, "Lire la suite")))))));
    }
    static get is() { return "g33-content-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["g33-content-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["g33-content-card.css"]
        };
    }
    static get properties() {
        return {
            "contentTitle": {
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
                "attribute": "content-title"
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
            "contentUrl": {
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
                "attribute": "content-url",
                "defaultValue": "'#'"
            }
        };
    }
}
