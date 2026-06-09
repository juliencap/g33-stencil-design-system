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
        return (h("article", { key: '8c8b078bb195790dfa7b6b25f779e764bd159e78', class: "post actualite" }, h("div", { key: 'd64d7e9606a2e6ba9153b487a0731eab0a8d9846', class: "featured-image" }, h("a", { key: 'cc099274d847dea82a861bcd27613c514e5d71ba', href: this.contentUrl }, h("img", { key: 'f5c3cd5b6317c4af4560598c53a93e9efe47093c', src: this.imageUrl, alt: this.contentTitle }))), h("div", { key: '739192c68b340f9655ca67334ace77de8953d963', class: "article-content" }, h("div", { key: 'b0613753cfeb8b1504b591f6d423068ea4d257f9', class: "meta" }, h("span", { key: 'b0012ab004a07af80688f77e6c6ab4e5a1acb2b0', class: "category" }, this.category), h("time", { key: '311874ab6cad892e5cd3ab624f79ff3ab99e9b80', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt)), h("header", { key: '328541b7f2cf4a60fbda33aacf5f735948b577ac', class: "entry-header" }, h("h2", { key: '5a0779ec309b778c894f8e2329e1eec7786f1d44', class: "entry-title" }, h("a", { key: '7ff3ed5741ce3045a72cbad2fef61fc33e8a27a5', href: this.contentUrl }, this.contentTitle))), h("div", { key: 'b016a3066d09c9987841526ea89f4a6ddd3ea91b', class: "entry-content clearfix" }, this.excerpt && h("p", { key: 'f107da5499b1116447888d0c626a9e0af22c61b7' }, this.excerpt), this.showCta && (h("a", { key: '840ae7932a57df5d97c42d4b41e07c6a260daa84', href: this.contentUrl, "aria-label": `Lire la suite : ${this.contentTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '511d98c425592ed733f62ccc26001cbed3673121', variant: "secondary" }, "Lire la suite")))))));
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
