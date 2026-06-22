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
        return (h("main", { key: '62f656a261ee4406e0a8101cca6873722cfc18df' }, h("h1", { key: 'c0349cbe5da74876848727922c82aeb14d70de97' }, "G33 Design System"), h("section", { key: 'fb4a4f1811b35aa0c60126719cdfc40f8e38f9d2' }, h("h2", { key: 'f7c60dd4459f63a2f4609009f84d414481c79f8e' }, "Buttons"), h("div", { key: 'e1345f095fb27b2c384133fb3847d9be46f3c1c1', class: "demo-row" }, h("g33-button", { key: '56d9c86a17de5add6af7e11a007df1b057c8fb16', size: "sm" }, "Petit"), h("g33-button", { key: '32d93dd1895657ebee202ccb467b4d0c464dbc2c', size: "md" }, "Moyen"), h("g33-button", { key: 'cc7ca213a573c0f812d4f401a14b974d9de67920', size: "lg" }, "Grand")), h("div", { key: '78a7f9dd05060072eb4e41dc9b0a49f1b0cd48e2', class: "demo-row" }, h("g33-button", { key: '895e25c9cb496499241e9f67995f9a99c032f901', variant: "secondary" }, "Secondaire"), h("g33-button", { key: '5237aa114b4c482d662749225102f1d9b1b68d4a', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: 'beefa3606bc5bc3ff31660c40828ed1494f0e8c8' }, h("h2", { key: '2cdb2a83c09637c3894b270752163c65ca715133' }, "Alerts"), h("g33-alert", { key: 'c6384ba77d9c474271713f7eb9b3d6bd9b0af5ec', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: 'd8dc2fedd838fd046771f1aaa875f49af9928df1', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: 'a74f46aea063003012ae7443eb78ad660f2a8876', type: "error" }, "Article supprim\u00E9")), h("section", { key: '659226d6e20a24db292774f29c60a535e38f2e93' }, h("h2", { key: '8c7e4123441c1ecf65419bcfea3a4fca156e028a' }, "Content card"), h("g33-content-card", { key: '83c94b7fe675d6e3611332f4307eab3718e921d6', contentTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://admin.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", contentUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: 'f8bfacc4eb6ac4da21770781e6c5d553c5982523' }, h("h2", { key: 'd18b69a01de3cc93f8dbf46fed53689f6506f80c' }, "Content List Item"), h("g33-content-list-item", { key: '5f0695e6ecf2eea443c3b28d3118c61b0a4347bc', contentTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", displayDate: "27/02", publishedDateTime: "2025-02-27", contentUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), this.hero && (h("section", { key: 'b98b5d2c33cbe4c9e9c4af8ddf7648633d2d17c7' }, h("h2", { key: 'cdfbf593fd814d6cfad680d6f512e774237f39d5' }, "Hero Banner / Storyblok"), h("h3", { key: 'b1193a7f7ec24662f6e266e09c54a335d42b9a06' }, "Simple"), h("g33-hero-banner", { key: 'e7df2328531a9d0e9fefdae9f978979c0e732042', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h3", { key: 'c51695f57f597d9007d55deec3c5821bb10d9cf2' }, "Avec sous-titre"), h("g33-hero-banner", { key: 'b1d3ad73e425049ebd18d643c25055d07e5f7c83', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h3", { key: '47ed470de978d4b14ead03906f18f773ed971617' }, "Complet"), h("g33-hero-banner", { key: '1a5408b9fcfaefe4966fc1d63043aad49d5d6f26', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target })))));
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
