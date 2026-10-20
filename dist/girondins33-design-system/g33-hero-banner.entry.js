import { r as registerInstance, h } from './index-DCr9BG4T.js';

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
        return (h("section", { key: 'e42e070da84c311edb72b82b191804cbd7707dc4', class: "hero-banner" }, this.imageUrl && h("img", { key: '87f5b4713a7c3b296dd864754b30309988b6b0e5', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: 'a1234c59fbc5f363b8094229eb52a228239336ca', class: "hero-banner__overlay" }), h("div", { key: '35a07e4142b2d33d61897aa49bb72205711ee106', class: "hero-banner__content" }, h("h1", { key: '2f92bc4a384e7977faecd28bbf6a891b8c8f80f8' }, this.titleText), this.subtitle && h("p", { key: '2fdb74827d270123999d5d11b8f30ad9a7f9ae73' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '20e409a09fa6768bc00e752ca3a9cc3033f5bd1d', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '5123eb69dea4111538df94caf35eb0500d337ad1', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

export { G33HeroBanner as g33_hero_banner };
//# sourceMappingURL=g33-hero-banner.entry.esm.js.map

//# sourceMappingURL=g33-hero-banner.entry.js.map