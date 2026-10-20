import { r as registerInstance, h } from './index-DCr9BG4T.js';

const g33ButtonCss = () => `:host{display:inline-block;font-family:var(--g33-font-family)}.button{border:0;border-radius:var(--g33-radius-md);padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-weight:var(--g33-font-weight-semibold);cursor:pointer;transition:background-color 0.2s ease,     border-color 0.2s ease,     color 0.2s ease}.button--primary{background:var(--g33-color-primary);color:var(--g33-color-white)}.button--primary:hover:not(:disabled){background:var(--g33-color-primary-hover)}.button--secondary{background:var(--g33-color-secondary);color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-secondary)}.button--secondary:hover:not(:disabled){opacity:0.9}.button--ghost{background:transparent;color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-white)}.button--ghost:hover:not(:disabled){background:var(--g33-color-white);color:var(--g33-color-primary)}.button:disabled{opacity:0.5;cursor:not-allowed}.button--sm{padding:var(--g33-spacing-xs) var(--g33-spacing-sm);font-size:var(--g33-font-size-xs)}.button--md{padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-size:var(--g33-font-size-sm)}.button--lg{padding:var(--g33-spacing-md) var(--g33-spacing-lg);font-size:var(--g33-font-size-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    variant = 'primary';
    size = 'md';
    disabled = false;
    render() {
        return (h("button", { key: '85fd2b7542cd3afcc865f9eb55d065e952f9877b', class: `button button--${this.variant} button--${this.size}`, disabled: this.disabled }, h("slot", { key: '55e71fcd08a8f65a075029f7d58a6de63ae11d89' })));
    }
};
G33Button.style = g33ButtonCss();

export { G33Button as g33_button };
//# sourceMappingURL=g33-button.entry.esm.js.map

//# sourceMappingURL=g33-button.entry.js.map