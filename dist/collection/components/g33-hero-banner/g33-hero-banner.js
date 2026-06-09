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
        return (h("section", { key: 'c86c6b25db71162594928fb049e0ee216c856a77', class: "hero-banner" }, this.imageUrl && h("img", { key: 'e4a3de35d6abf8a5230b5fd9ad72f15ee0dcdbd3', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: 'bf8701115423e760bed94d5febe26d8e46518dc4', class: "hero-banner__overlay" }), h("div", { key: 'a007a027d48fd472fd97efd8e159d37b1a3afddd', class: "hero-banner__content" }, h("h1", { key: '373123d900c8a5709bbcf75b812b17301bb7a034' }, this.titleText), this.subtitle && h("p", { key: '63ac8f6043365b70f1139278ad51d92197c8e83d' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '495829fcc11e38873809b26afa2f9339c4adcce6', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: 'e8c0aa9594370dbdb964544d714482cf8a8244b1', variant: "ghost" }, this.ctaLabel))))));
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
