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
        return (h("main", { key: '62f656a261ee4406e0a8101cca6873722cfc18df' }, h("h1", { key: 'c0349cbe5da74876848727922c82aeb14d70de97' }, "G33 Design System"), h("section", { key: 'fb4a4f1811b35aa0c60126719cdfc40f8e38f9d2' }, h("h2", { key: 'f7c60dd4459f63a2f4609009f84d414481c79f8e' }, "Buttons"), h("div", { key: 'e1345f095fb27b2c384133fb3847d9be46f3c1c1', class: "demo-row" }, h("g33-button", { key: '56d9c86a17de5add6af7e11a007df1b057c8fb16', size: "sm" }, "Petit"), h("g33-button", { key: '32d93dd1895657ebee202ccb467b4d0c464dbc2c', size: "md" }, "Moyen"), h("g33-button", { key: 'cc7ca213a573c0f812d4f401a14b974d9de67920', size: "lg" }, "Grand")), h("div", { key: '78a7f9dd05060072eb4e41dc9b0a49f1b0cd48e2', class: "demo-row" }, h("g33-button", { key: '895e25c9cb496499241e9f67995f9a99c032f901', variant: "secondary" }, "Secondaire"), h("g33-button", { key: '5237aa114b4c482d662749225102f1d9b1b68d4a', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: 'beefa3606bc5bc3ff31660c40828ed1494f0e8c8' }, h("h2", { key: '2cdb2a83c09637c3894b270752163c65ca715133' }, "Alerts"), h("g33-alert", { key: 'c6384ba77d9c474271713f7eb9b3d6bd9b0af5ec', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: 'd8dc2fedd838fd046771f1aaa875f49af9928df1', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: 'a74f46aea063003012ae7443eb78ad660f2a8876', type: "error" }, "Article supprim\u00E9")), h("section", { key: '659226d6e20a24db292774f29c60a535e38f2e93' }, h("h2", { key: '8c7e4123441c1ecf65419bcfea3a4fca156e028a' }, "Content card"), h("g33-content-card", { key: 'f708a36e6faa556ab503c185218dc5db7a458010', contentTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", contentUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: 'd81f8635a7b494d9a776aeb2a5e9cea8d6340b6c' }, h("h2", { key: '22eebbe64da4a99aae823c36ecfd336cd14d2355' }, "Content List Item"), h("g33-content-list-item", { key: 'a1e108906656e5cb6ba484b2c8ae1baeee90ed97', contentTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", displayDate: "27/02", publishedDateTime: "2025-02-27", contentUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), this.hero && (h("section", { key: '19946dd73a5ce2fd343f8ce2f281d6061c8cea66' }, h("h2", { key: '51cda458fbced6d8cb9c7a55afbb4c14a713ad31' }, "Hero Banner / Storyblok"), h("h3", { key: '1fb544c81066ec7a7669436c4aeae0dcbb392199' }, "Simple"), h("g33-hero-banner", { key: '5b3bd67babb56f1596b4fc57d92be6c3dde7a79c', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h3", { key: '0cc67182abb755c9f2357413420c9c838b1f65b0' }, "Avec sous-titre"), h("g33-hero-banner", { key: '53bf5227e81eefe374d9023f9481c1d70a90d7a5', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h3", { key: '90ba0a4d7dde963421bc803cfc9e63dd68fd327f' }, "Complet"), h("g33-hero-banner", { key: '1830bcbb66f623e82e4f0dcd74bca68227f2295e', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target })))));
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
