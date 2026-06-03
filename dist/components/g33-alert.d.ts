import type { Components, JSX } from "../types/components";

interface G33Alert extends Components.G33Alert, HTMLElement {}
export const G33Alert: {
    prototype: G33Alert;
    new (): G33Alert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
