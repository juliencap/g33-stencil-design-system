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
        return (h("section", { key: 'f1e5fe75fb6e353d3ea31f6c133048320e2ec9e0', class: "hero-banner" }, this.imageUrl && h("img", { key: '6c6afe4b4e76ad364cd85ba75cd759d9aa58414d', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: 'd8a212d6d08e3fb9043248c765888abbc362e2fe', class: "hero-banner__overlay" }), h("div", { key: '1ea7cb775879ae1663ec5ab79be740246a2ec8be', class: "hero-banner__content" }, h("h1", { key: '866dccc21d1e9a8c2d31113e7043792e9e112f0a' }, this.titleText), this.subtitle && h("p", { key: '0aa8b338cbf0042dfc001532bbe6b1641867dbae' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '58201f20ea96513117ae32342ad406a7a01df8b8', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '7830318ed01b922f4b679d089a429d5ea81092c4', variant: "ghost" }, this.ctaLabel))))));
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
