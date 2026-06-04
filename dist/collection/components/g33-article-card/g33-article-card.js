import { h } from "@stencil/core";
export class G33ArticleCard {
    postTitle;
    category;
    excerpt;
    imageUrl;
    author;
    publishedAt;
    publishedDateTime;
    postUrl = '#';
    render() {
        return (h("article", { key: 'f563286bd02859df0dd8f3470d32711aa1da96b2', class: "post actualite" }, h("div", { key: 'cd1c608e1e3b5648464779e2a90a0e3476831483', class: "featured-image" }, h("a", { key: '1f6c0686778e481116cb8d987fb9e0243dcee2b8', href: this.postUrl }, h("img", { key: 'fc514fa7ae8f22103623e1e65d5339a93ea93f25', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: '0c65f7ea044f6e023be1c2334c398744cdc760b0', class: "article-content" }, h("div", { key: '549a03a64d1e57b9a3b87793f6d4da6b33704b01', class: "above-entry-meta" }, h("span", { key: '5aa7b01eea289c18f63c9a36e0f7f8f3619c5f6f', class: "cat-links" }, this.category), h("span", { key: '5bfbec6ea3d2680cf9510d3f8849a79ed9c6cf12', class: "posted-on" }, h("time", { key: '8ae2a2ddf12ab49c807eab3adb7754ad4f6a6253', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), h("header", { key: 'd45e6420320ed1d4c47ae46ddc067cebc52807a7', class: "entry-header" }, h("h2", { key: '5a31b6315ac503c55baf9ae587d68911eac7b519', class: "entry-title" }, h("a", { key: 'e4d1d380834fa809df6a29c39c0d23635537aaea', href: this.postUrl }, this.postTitle))), h("div", { key: '99ffd8040a220e664604a22088767d79cd0653f8', class: "entry-content clearfix" }, this.excerpt && h("p", { key: 'faf24100bfa0b8a5d8495b6924ed857af0be1f78' }, this.excerpt), h("a", { key: 'c3791a9221211de2cfd7a610177a4bdeb67294cd', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '3cc1fd7ec7279788a5abbb6f0a0e82bb9b1cd357', variant: "secondary" }, "Lire la suite"))))));
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
