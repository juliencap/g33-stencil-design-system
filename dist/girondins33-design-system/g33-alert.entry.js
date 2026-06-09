import { r as registerInstance, h } from './index-C0fy5Ulw.js';

const g33AlertCss = () => `:host{display:block}.alert{padding:12px 16px;border-radius:6px;margin-bottom:12px;font-weight:500}.alert--info{background:#e8f4fd;color:#0c4a6e}.alert--success{background:#dcfce7;color:#166534}.alert--warning{background:#fef3c7;color:#92400e}.alert--error{background:#fee2e2;color:#991b1b}`;

const G33Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    type = 'info';
    render() {
        return (h("div", { key: '9bfcee3ba241df2628ebb088158cc182735fe95e', class: `alert alert--${this.type}` }, h("slot", { key: 'edea5d076b9b71671b74803104ed1f7801c54ddf' })));
    }
};
G33Alert.style = g33AlertCss();

export { G33Alert as g33_alert };
//# sourceMappingURL=g33-alert.entry.esm.js.map

//# sourceMappingURL=g33-alert.entry.js.map