import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g33-article-card',
  styleUrl: 'g33-article-card.css',
  shadow: true,
})
export class G33ArticleCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
