import { r as registerInstance, E as Env, h } from './index-C0fy5Ulw.js';

const g33ShowcaseCss = () => `:host{display:block;font-family:var(--g33-font-family)}main{padding:32px}section{margin-top:32px}.demo-row{display:flex;gap:12px;margin-bottom:12px}g33-button{margin-right:12px}`;

const G33Showcase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hero;
    async componentWillLoad() {
        const token = Env.STORYBLOK_TOKEN;
        const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${token}`);
        const data = await response.json();
        this.hero = data.story.content.body.find(block => block.component === 'HeroBanner');
    }
    render() {
        return (h("main", { key: 'a5b4f33f5f9183ce0a9c5552cdaa58acddcebc9a' }, h("h1", { key: '72f9582e7492398a000b51904f4c0cb2de956c9d' }, "G33 Design System"), h("section", { key: '81705e85f49b0a5bd0b19329b7bd7cc3d94e6a1f' }, h("h2", { key: '19887059e26683abf3998a10ca88d6a9fbd175f2' }, "Buttons"), h("div", { key: 'c21983a3c8dc49a8058847d02bab034e84fca7ab', class: "demo-row" }, h("g33-button", { key: '8f72d35436487dd202ff9d2e8b8ac71dc45df8da', size: "sm" }, "Petit"), h("g33-button", { key: 'be7c4253915436d9c9b69bc131950695e55dfbe6', size: "md" }, "Moyen"), h("g33-button", { key: 'bcf5a9c9e82b339b9c42e28740661edf4eff7ba4', size: "lg" }, "Grand")), h("div", { key: '3136fb9fe1c139d1be2d625135462f9ca04771a1', class: "demo-row" }, h("g33-button", { key: '578c766423d88dbfe4e7b104633b08e0e326506d', variant: "secondary" }, "Secondaire"), h("g33-button", { key: 'b4316e2b784ab6aaa2d7bfe01af234e96a028e91', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: '660e30182bcc160014bd5569d2b22d572d6c01ac' }, h("h2", { key: '7ed9c247e9495f02880d813048ae1557deb69097' }, "Alerts"), h("g33-alert", { key: 'c3901395fbf682c587c46c98a65f99e16aec3d44', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: 'fbd09d5ee0d76ceb82e66492cedf0ddcb05c8df4', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: 'a2d76c8cef94866c31973d2af684f95e43b27aa6', type: "error" }, "Article supprim\u00E9")), h("section", { key: 'de2029e6fe72aa776d8c92011599341aaa3beb28' }, h("h2", { key: '76ef4f4a2f4946c07fea7b884e58bbd03eaf0b6d' }, "Article card"), h("g33-article-card", { key: '9e9a8cf83d7d4d458a6b88f03d5113667e99d096', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: '89625e94a670d114a9591a3711ba7f5b01ced65a' }, h("h2", { key: 'df16a5d1569d3754a43b263eafa4d883715577f2' }, "Hero simple"), h("g33-hero-banner", { key: '3740eb834d996c666d36b2c7b659c72e0d0b0394', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h2", { key: '5a7d8ae77f6f03601f5aa204bf532d88090e1324' }, "Hero avec sous-titre"), h("g33-hero-banner", { key: '98eb8175bd42a9f8f0c2582b36d9c2d9ce3e0e5b', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h2", { key: '5de366589a97e28ed87743c465e262465b217d1a' }, "Hero"), h("g33-hero-banner", { key: 'd60b15cc99649fa2241cb0c0fd63f6301135262e', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
    }
};
G33Showcase.style = g33ShowcaseCss();

export { G33Showcase as g33_showcase };
//# sourceMappingURL=g33-showcase.entry.esm.js.map

//# sourceMappingURL=g33-showcase.entry.js.map