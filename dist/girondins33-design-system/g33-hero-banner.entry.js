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
        return (h("section", { key: '81ea532d36b0c87909a173b86373062a8a40f694', class: "hero-banner" }, this.imageUrl && h("img", { key: 'd041ba6a6508962ac004db4028e395b43e4e4d9c', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: '33c8bd024f9793b088dee7cb867b54a16af8816f', class: "hero-banner__overlay" }), h("div", { key: 'ad1c60725d6ea526a29c430e8deacceff1a07921', class: "hero-banner__content" }, h("h1", { key: 'c13f71654173eec8dd96bc87ca7a6f62047c43d2' }, this.titleText), this.subtitle && h("p", { key: 'b8ba9c1fa69bc4aaaaa703935c82d98b5d9077ce' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '56ce9cba06a3660d6a4a32352d1a4bec5613a6de', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '7992f296c918e0c1899189ebbd953adb6d7d90db', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

export { G33HeroBanner as g33_hero_banner };
//# sourceMappingURL=g33-hero-banner.entry.esm.js.map

//# sourceMappingURL=g33-hero-banner.entry.js.map