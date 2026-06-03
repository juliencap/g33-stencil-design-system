import type { Components, JSX } from "../types/components";

interface G33Showcase extends Components.G33Showcase, HTMLElement {}
export const G33Showcase: {
    prototype: G33Showcase;
    new (): G33Showcase;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
