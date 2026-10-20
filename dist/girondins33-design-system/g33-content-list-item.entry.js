import { r as registerInstance, h } from './index-DCr9BG4T.js';

const g33ContentListItemCss = () => `:host{display:block}a{text-decoration:none;color:inherit}.meta{font-size:var(--g33-font-size-sm);color:var(--g33-color-text-light);margin-bottom:var(--g33-spacing-sm)}.entry-date{color:var(--g33-color-text-light)}.title{font-size:var(--g33-font-size-md);font-weight:var(--g33-font-weight-regular);line-height:var(--g33-line-height-default);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.category::before{content:'•';margin-left:var(--g33-spacing-xs);margin-right:var(--g33-spacing-xs)}`;

const G33ContentListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    displayDate;
    publishedDateTime;
    category;
    contentTitle;
    contentUrl;
    render() {
        return (h("a", { key: 'e16ec3a37c500f56b49b016d919a95821bee8c5a', href: this.contentUrl, "aria-label": this.contentTitle }, h("div", { key: '3f5f0907c6cf8330537be3eead6f634f2626cb6a', class: "meta" }, h("time", { key: 'b3bb979c272854e478be0c8eaddd55214a376958', class: "entry-date", dateTime: this.publishedDateTime }, this.displayDate), h("span", { key: 'd8082e4071a143b9143b63f32f0e96fdb004769e', class: "category" }, this.category)), h("div", { key: '178a10c3b83a223abf05beb0613f7790008a0286', class: "title" }, this.contentTitle)));
    }
};
G33ContentListItem.style = g33ContentListItemCss();

export { G33ContentListItem as g33_content_list_item };
//# sourceMappingURL=g33-content-list-item.entry.esm.js.map

//# sourceMappingURL=g33-content-list-item.entry.js.map