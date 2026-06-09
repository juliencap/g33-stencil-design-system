import type { Components, JSX } from "../types/components";

interface G33ContentCard extends Components.G33ContentCard, HTMLElement {}
export const G33ContentCard: {
    prototype: G33ContentCard;
    new (): G33ContentCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
