import { r as registerInstance, h } from './index-C0fy5Ulw.js';

const g33HeroBannerCss = () => `:host{display:block;font-family:var(--g33-font-family)}.hero-banner{position:relative;min-height:400px;display:flex;align-items:center;overflow:hidden;border-radius:var(--g33-radius-lg)}.hero-banner__image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-banner__overlay{position:absolute;inset:0;background:rgba(0, 0, 0, 0.45)}.hero-banner__content{position:relative;z-index:1;padding:var(--g33-spacing-xl);color:var(--g33-color-white);max-width:700px}.hero-banner__content h1{margin:0 0 var(--g33-spacing-md);font-size:var(--g33-font-size-xl);font-weight:var(--g33-font-weight-black);line-height:1.1}.hero-banner__content p{margin:0 0 var(--g33-spacing-lg);font-size:var(--g33-font-size-md);line-height:var(--g33-line-height-default)}.hero-banner__content a{text-decoration:none}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33HeroBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    titleText;
    subtitle;
    imageUrl;
    imageAlt;
    ctaLabel;
    ctaUrl;
    ctaTarget;
    render() {
        return (h("section", { key: '02a65ce8e7421f62d4eba0df2be65a93d7659151', class: "hero-banner" }, this.imageUrl && h("img", { key: 'e370ff602ea64df7a03cc913d53e7ac8c55146ca', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: '4ad61d02352674a1450cf0c2ef7819f16008df52', class: "hero-banner__overlay" }), h("div", { key: '2d691f58e49913b94d9776c76670234b0deecc80', class: "hero-banner__content" }, h("h1", { key: '02f8a5c279a5ee5aff7f64ed8dd31371d2e53165' }, this.titleText), this.subtitle && h("p", { key: '5212faa51851e23a0c495e24fd855420f14ee070' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '640863c2d720fd22e55e043770af56559671184b', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '203c8bc6e9969fe76551195cd88f9b37bea5fba2', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

export { G33HeroBanner as g33_hero_banner };
//# sourceMappingURL=g33-hero-banner.entry.esm.js.map

//# sourceMappingURL=g33-hero-banner.entry.js.map