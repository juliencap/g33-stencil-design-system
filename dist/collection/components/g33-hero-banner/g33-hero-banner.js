import { h } from "@stencil/core";
export class G33HeroBanner {
    titleText;
    subtitle;
    imageUrl;
    imageAlt;
    ctaLabel;
    ctaUrl;
    ctaTarget;
    render() {
        return (h("section", { key: '81ea532d36b0c87909a173b86373062a8a40f694', class: "hero-banner" }, this.imageUrl && h("img", { key: 'd041ba6a6508962ac004db4028e395b43e4e4d9c', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: '33c8bd024f9793b088dee7cb867b54a16af8816f', class: "hero-banner__overlay" }), h("div", { key: 'ad1c60725d6ea526a29c430e8deacceff1a07921', class: "hero-banner__content" }, h("h1", { key: 'c13f71654173eec8dd96bc87ca7a6f62047c43d2' }, this.titleText), this.subtitle && h("p", { key: 'b8ba9c1fa69bc4aaaaa703935c82d98b5d9077ce' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '56ce9cba06a3660d6a4a32352d1a4bec5613a6de', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '7992f296c918e0c1899189ebbd953adb6d7d90db', variant: "ghost" }, this.ctaLabel))))));
    }
    static get is() { return "g33-hero-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["g33-hero-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["g33-hero-banner.css"]
        };
    }
    static get properties() {
        return {
            "titleText": {
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
                "attribute": "title-text"
            },
            "subtitle": {
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
                "attribute": "subtitle"
            },
            "imageUrl": {
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
                "attribute": "image-url"
            },
            "imageAlt": {
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
                "attribute": "image-alt"
            },
            "ctaLabel": {
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
                "attribute": "cta-label"
            },
            "ctaUrl": {
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
                "attribute": "cta-url"
            },
            "ctaTarget": {
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
                "attribute": "cta-target"
            }
        };
    }
}
