import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g33-article-card',
  styleUrl: 'g33-article-card.css',
  shadow: true,
})
export class G33ArticleCard {
  @Prop() postTitle!: string;
  @Prop() category!: string;
  @Prop() excerpt?: string;
  @Prop() imageUrl!: string;
  @Prop() author?: string;
  @Prop() publishedAt!: string;
  @Prop() postUrl: string = '#';

  render() {
    return (
      <article class="post actualite">
        <div class="featured-image">
          <a href={this.postUrl}>
            <img src={this.imageUrl} alt={this.postTitle} />
          </a>
        </div>

        <div class="article-content">
          <div class="above-entry-meta">
            <span class="cat-links">{this.category}</span>
          </div>

          <header class="entry-header">
            <h2 class="entry-title">
              <a href={this.postUrl}>{this.postTitle}</a>
            </h2>
          </header>

          <div class="below-entry-meta">
            <span class="posted-on">
              <time class="entry-date">{this.publishedAt}</time>
            </span>

            {this.author && (
              <span class="byline">
                <span class="author vcard">{this.author}</span>
              </span>
            )}
          </div>

          <div class="entry-content clearfix">
            {this.excerpt && <p>{this.excerpt}</p>}
            <g33-button variant="secondary">Lire la suite</g33-button>
          </div>
        </div>
      </article>
    );
  }
}
