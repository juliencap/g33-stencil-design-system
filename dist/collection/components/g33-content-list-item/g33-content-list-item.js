import { h } from "@stencil/core";
export class G33ContentListItem {
    displayDate;
    publishedDateTime;
    category;
    contentTitle;
    contentUrl;
    render() {
        return (h("a", { key: 'e16ec3a37c500f56b49b016d919a95821bee8c5a', href: this.contentUrl, "aria-label": this.contentTitle }, h("div", { key: '3f5f0907c6cf8330537be3eead6f634f2626cb6a', class: "meta" }, h("time", { key: 'b3bb979c272854e478be0c8eaddd55214a376958', class: "entry-date", dateTime: this.publishedDateTime }, this.displayDate), h("span", { key: 'd8082e4071a143b9143b63f32f0e96fdb004769e', class: "category" }, this.category)), h("div", { key: '178a10c3b83a223abf05beb0613f7790008a0286', class: "title" }, this.contentTitle)));
    }
    static get is() { return "g33-content-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["g33-content-list-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["g33-content-list-item.css"]
        };
    }
    static get properties() {
        return {
            "displayDate": {
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
                "attribute": "display-date"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "published-date-time"
            },
            "category": {
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
                "attribute": "category"
            },
            "contentTitle": {
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
                "attribute": "content-title"
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
                "attribute": "content-url"
            }
        };
    }
}
