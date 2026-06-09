import { h } from "@stencil/core";
export class G33ContentCard {
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
        return (h("article", { key: '95eb9f75c077386781477bc759f65bff0cc23472', class: "post actualite" }, h("div", { key: '32ed51d409a393bb675d835bc4a0d6ee41a8c96a', class: "featured-image" }, h("a", { key: 'b356fd9e05a10089096c382d6aa92c54fc43bee0', href: this.postUrl }, h("img", { key: '16e23119968c663765734650696297d079ff6e33', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: '1b6955c8e41ee8d9379a4a6175cbbf0958231a42', class: "article-content" }, h("div", { key: 'f68fc37115ebd812c96fe426753253c62e8578e9', class: "above-entry-meta" }, h("span", { key: '26412503a7c9f01447eb34233c8b4229f17fe327', class: "cat-links" }, this.category), h("span", { key: '31348cce118179300a01cd0158cb460dc580fa66', class: "posted-on" }, h("time", { key: 'a87585a08fa5d61c8d5ae9eaf30adb2c39cf95a2', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), h("header", { key: 'f889dbb157a828f93211cee85d746cafea2337eb', class: "entry-header" }, h("h2", { key: '36656753d43c451ecaca17614086a768fc69ca4c', class: "entry-title" }, h("a", { key: '558c26e38c213912735c73910628e0b3f4090f6a', href: this.postUrl }, this.postTitle))), h("div", { key: 'eb527f932b1e97772f50282630bd726bbd34390e', class: "entry-content clearfix" }, this.excerpt && h("p", { key: 'bf3a593693000185caf356f711a02f52f0db9b02' }, this.excerpt), this.showCta && (h("a", { key: '07d6465fbad0779b83df036ea60a4c8200826b99', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: 'd45332c6fc6bbb8a9ec755bc7fff6ecf3d20a1a8', variant: "secondary" }, "Lire la suite")))))));
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
