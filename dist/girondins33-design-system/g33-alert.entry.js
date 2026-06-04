import { r as registerInstance, h } from './index-C0fy5Ulw.js';

const g33AlertCss = () => `:host{display:block}.alert{padding:12px 16px;border-radius:6px;margin-bottom:12px;font-weight:500}.alert--info{background:#e8f4fd;color:#0c4a6e}.alert--success{background:#dcfce7;color:#166534}.alert--warning{background:#fef3c7;color:#92400e}.alert--error{background:#fee2e2;color:#991b1b}`;

const G33Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    type = 'info';
    render() {
        return (h("div", { key: '8cd9b2c749dcfde1c194bcdc179b49912270a2ac', class: `alert alert--${this.type}` }, h("slot", { key: '18cd88151df6804848b4bec05b81c16ad5398817' })));
    }
};
G33Alert.style = g33AlertCss();

export { G33Alert as g33_alert };
//# sourceMappingURL=g33-alert.entry.esm.js.map

//# sourceMappingURL=g33-alert.entry.js.map