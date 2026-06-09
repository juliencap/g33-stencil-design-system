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
        return (h("main", { key: 'f6da821db435eebb0bfbaf8a6446307b3019289a' }, h("h1", { key: '73d884bcac910887f1819a91b35aa37c43e5b080' }, "G33 Design System"), h("section", { key: 'cc321cfc13568b97fd3ad345b0545c94b1017af3' }, h("h2", { key: 'fa8ca086b14887e909971296974f7db15412c7bf' }, "Buttons"), h("div", { key: 'dcf22ae4aee99b354ee60e73754c8f46ae4e8e73', class: "demo-row" }, h("g33-button", { key: '297427717aa77a412b88e04b7e5d0f30d972d838', size: "sm" }, "Petit"), h("g33-button", { key: 'e98fe062a9e457775883a5edc021407e27f246c6', size: "md" }, "Moyen"), h("g33-button", { key: '5d15b7d2a81fb2b5e6830174d48f9fb8c4d8f896', size: "lg" }, "Grand")), h("div", { key: '2277f6368add1ed17b3d0b72b767aa51df9c753f', class: "demo-row" }, h("g33-button", { key: '6a02d3551eef52ee854f886350914064ee2e0644', variant: "secondary" }, "Secondaire"), h("g33-button", { key: '1522b4fe5bf7bb07a5459d2ea5c5148e19a1d88e', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: 'ffe7f7ef50978515d8cbf256c97d6cec1e28bea9' }, h("h2", { key: 'e3650ff284a233a8fccf8d36dfee5904cff2a055' }, "Alerts"), h("g33-alert", { key: '30cd4a0521dcef1d1325116a66484ed35485cb6b', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: '9f04fed866d6e67dd01975c8d46774dd414de6b5', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: '3a4fcb2504a9a35f2ff9949a429008b152b5bac1', type: "error" }, "Article supprim\u00E9")), h("section", { key: 'fe7da1c389ccd7ffc5e3ba742c614ffd24eff369' }, h("h2", { key: '45ec74595e98b849f4c9059658d987e143c38669' }, "Article card"), h("g33-article-card", { key: '06efe7fdd85b16b71bfce18a8c64f6157ee71835', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: '5c7abdcf87b24a999b2d8d3164236f41cbd156db' }, h("h2", { key: '157e4cde60a85671d70dc04d6e06c33e4c74580d' }, "Hero simple"), h("g33-hero-banner", { key: '76af0fafb762c49a2abfa50ce2d28829d75bc282', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h2", { key: '20b06be207751e359600da6163bb39eaff5939bd' }, "Hero avec sous-titre"), h("g33-hero-banner", { key: '39f8ad07b1195d648fe0c24fca8248d24e394ac4', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h2", { key: '0a806564e39d50a7ef5f9808c44dd71af01451c7' }, "Hero"), h("g33-hero-banner", { key: '6e0fb53801038d529aea0b8d737f307186f5f8ee', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
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
