import { Env, h } from "@stencil/core";
export class G33Showcase {
    hero;
    async componentWillLoad() {
        const token = Env.STORYBLOK_TOKEN;
        const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${token}`);
        const data = await response.json();
        this.hero = data.story.content.body.find(block => block.component === 'HeroBanner');
    }
    render() {
        return (h("main", { key: '14ef0cdcb896aafa47d5f91629cbd0612b2c9a93' }, h("h1", { key: '5505a93c66dda4fe7318e89ce487ac4e0f847d56' }, "G33 Design System"), h("section", { key: '28a0b582fcd03fe879caed2a0a4f806f00c85bc3' }, h("h2", { key: '6200a707e29fa2d4ccc09f690ba6b8f24eeb5811' }, "Buttons"), h("div", { key: 'a5120e8a54d3304fb41f4dad9a0a05dc641a0479', class: "demo-row" }, h("g33-button", { key: 'cbeb7b3986817291e49baf34121df0f6c126160f', size: "sm" }, "Petit"), h("g33-button", { key: '7855553748e9d6febbd4543ff86138fdc45e54e9', size: "md" }, "Moyen"), h("g33-button", { key: 'b8163bcade04004a0609ba4b56d91ca2f74384be', size: "lg" }, "Grand")), h("div", { key: 'acfd56dbbb5497c3bb2e6f1d9d429332c01bf6be', class: "demo-row" }, h("g33-button", { key: 'a9478111308bc1f092d4f1039bceeb39dd0da72e', variant: "secondary" }, "Secondaire"), h("g33-button", { key: '0cf2b15a09dc943237c7b0cf56c91c44f4adfe18', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: '570df7f6b4a63a45003409e7c84e436dca70a8f5' }, h("h2", { key: 'beb973b19aa28b6e7199acc47864faee2021d47d' }, "Alerts"), h("g33-alert", { key: '3c84533e2b638d2484a32591b56217e5a704c99c', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: '893289bf3b53258440c75aab532e373fee62a787', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: '7b2a401dd523d0027934a5bb3c198f0f6dbcc4da', type: "error" }, "Article supprim\u00E9")), h("section", { key: 'c534cb55dd1a34484e1a0637b6bc9ea2e3fee034' }, h("h2", { key: 'e24eca4fec9717f22b9b0e2ed744428ec1db7358' }, "Article card"), h("g33-article-card", { key: '934339dd1cb5fd4edcb8fe5bd616bd6b174ca7ff', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: 'a3e94c681e12b2be684719436e1a18227e7f19c9' }, h("h2", { key: '868e448730afcd9a5a23f1186aacd80993ee0cf1' }, "Hero simple"), h("g33-hero-banner", { key: 'f86bf6634c95663d7d218acda2230f3a2dcfeb04', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h2", { key: '576b5bdc57c011459d7bd504a91e2f32dc144511' }, "Hero avec sous-titre"), h("g33-hero-banner", { key: 'fae1787098c50df5b0a247cc041c7afc4199aebd', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h2", { key: '75f6caa3fd7040a14f36c69c2923e8df8f586ea0' }, "Hero"), h("g33-hero-banner", { key: '0a108846fd5a6bb71a25135c93e43ea7d5e3e616', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
    }
    static get is() { return "g33-showcase"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["g33-showcase.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["g33-showcase.css"]
        };
    }
    static get states() {
        return {
            "hero": {}
        };
    }
}
