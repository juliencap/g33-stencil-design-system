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
        return (h("section", { key: 'f1e5fe75fb6e353d3ea31f6c133048320e2ec9e0', class: "hero-banner" }, this.imageUrl && h("img", { key: '6c6afe4b4e76ad364cd85ba75cd759d9aa58414d', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: 'd8a212d6d08e3fb9043248c765888abbc362e2fe', class: "hero-banner__overlay" }), h("div", { key: '1ea7cb775879ae1663ec5ab79be740246a2ec8be', class: "hero-banner__content" }, h("h1", { key: '866dccc21d1e9a8c2d31113e7043792e9e112f0a' }, this.titleText), this.subtitle && h("p", { key: '0aa8b338cbf0042dfc001532bbe6b1641867dbae' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '58201f20ea96513117ae32342ad406a7a01df8b8', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '7830318ed01b922f4b679d089a429d5ea81092c4', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

export { G33HeroBanner as g33_hero_banner };
//# sourceMappingURL=g33-hero-banner.entry.esm.js.map

//# sourceMappingURL=g33-hero-banner.entry.js.map