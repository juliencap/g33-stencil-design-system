import type { Components, JSX } from "../types/components";

interface G33ContentListItem extends Components.G33ContentListItem, HTMLElement {}
export const G33ContentListItem: {
    prototype: G33ContentListItem;
    new (): G33ContentListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
