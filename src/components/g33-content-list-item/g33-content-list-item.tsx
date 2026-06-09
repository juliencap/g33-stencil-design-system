import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g33-content-list-item',
  styleUrl: 'g33-content-list-item.css',
  shadow: true,
})
export class G33ContentListItem {
  @Prop() displayDate: string;
  @Prop() publishedDateTime: string;
  @Prop() category: string;
  @Prop() contentTitle: string;
  @Prop() contentUrl: string;

  render() {
    return (
      <a href={this.contentUrl} aria-label={this.contentTitle}>
        <div class="meta">
          <time class="entry-date" dateTime={this.publishedDateTime}>
            {this.displayDate}
          </time>
          <span class="category">{this.category}</span>
        </div>

        <div class="title">{this.contentTitle}</div>
      </a>
    );
  }
}
