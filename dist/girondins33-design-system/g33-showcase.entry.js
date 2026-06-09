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
        return (h("main", { key: '33791ecd6e7801d830acfe8c8188af2a0dfa1a42' }, h("h1", { key: '43a38881f5b65e4d720898a6d72edabeb964af20' }, "G33 Design System"), h("section", { key: 'bf96b9df5b0d74cb8d3bf7096191f5c96a5126ae' }, h("h2", { key: 'e4649056a674bc732ff8fedd16f1b830a1542a25' }, "Buttons"), h("div", { key: '6f8b20451c2bc6c3fabd74013d9099d2ec954f7d', class: "demo-row" }, h("g33-button", { key: '790de46630dd7c25cb6a7260151127a62643ab1b', size: "sm" }, "Petit"), h("g33-button", { key: 'facfab9ebd4906c83864149f1ab5f575f4534663', size: "md" }, "Moyen"), h("g33-button", { key: '97ce72ff8567f0c9f2ac07d66e86c06039e8bc2a', size: "lg" }, "Grand")), h("div", { key: '1bdc14e93b64edbd74a93247156f4311a056ce67', class: "demo-row" }, h("g33-button", { key: 'f676cc0fc02a47c0810d95b3e652bee077986ee5', variant: "secondary" }, "Secondaire"), h("g33-button", { key: 'd716c00850ec7c8f322242f2b0072ec26bddaccc', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: '4531913f4bdf70565117c7263e1b024d88416529' }, h("h2", { key: '032b9cf19e75d05e2c043c0c96e8d03349ba7206' }, "Alerts"), h("g33-alert", { key: '02aa01661c38b6a4d8eb3f1ef21437fb72cc4f9b', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: 'e18f45a858bb91b7ec0f702c671f4914a476427c', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: 'acad2acab7d724153beedb1ab2ae5ab9318a8c15', type: "error" }, "Article supprim\u00E9")), h("section", { key: '92c1d089a3ad2bd127b2e1ca5fbfb9bf398d8a88' }, h("h2", { key: '2082a79dd0d13ecfcc728bd2be35caae09e78cb9' }, "Article card"), h("g33-article-card", { key: 'a7916863630d5a47e26a28f0eef6423bbe3aaa14', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: '97eb419da05ae612ad04b6583f2aea067375329e' }, h("h2", { key: '2d225f7067e5dd8d42be16107e28bf1ef6168c21' }, "Hero simple"), h("g33-hero-banner", { key: '3e7c1279ac7e04639d1cb7bbc58a41feb5c06f8c', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h2", { key: '735a2dd24aafd5c165fbf1f7e94eb6cf2c2f85e7' }, "Hero avec sous-titre"), h("g33-hero-banner", { key: 'e66a3371aba0600be822f4252f689d2721fa8aa3', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h2", { key: 'aca16dfce338f7b315755fbc78e0ccbb51017985' }, "Hero"), h("g33-hero-banner", { key: '2421ff9083b307d83b40305ed3857e7f4bd79334', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
    }
};
G33Showcase.style = g33ShowcaseCss();

export { G33Showcase as g33_showcase };
//# sourceMappingURL=g33-showcase.entry.esm.js.map

//# sourceMappingURL=g33-showcase.entry.js.map