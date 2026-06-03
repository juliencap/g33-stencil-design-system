import { h } from "@stencil/core";
export class G33Alert {
    type = 'info';
    render() {
        return (h("div", { key: '8cd9b2c749dcfde1c194bcdc179b49912270a2ac', class: `alert alert--${this.type}` }, h("slot", { key: '18cd88151df6804848b4bec05b81c16ad5398817' })));
    }
    static get is() { return "g33-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["g33-alert.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["g33-alert.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'info' | 'success' | 'warning' | 'error'",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
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
                "attribute": "type",
                "defaultValue": "'info'"
            }
        };
    }
}
