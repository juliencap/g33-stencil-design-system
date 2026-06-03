import type { Components, JSX } from "../types/components";

interface G33Button extends Components.G33Button, HTMLElement {}
export const G33Button: {
    prototype: G33Button;
    new (): G33Button;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
