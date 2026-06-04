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
  @Prop() publishedDateTime?: string;
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
            <span class="posted-on">
              <time class="entry-date" dateTime={this.publishedDateTime}>
                {this.publishedAt}
              </time>
            </span>
          </div>

          <header class="entry-header">
            <h2 class="entry-title">
              <a href={this.postUrl}>{this.postTitle}</a>
            </h2>
          </header>

          <div class="entry-content clearfix">
            {this.excerpt && <p>{this.excerpt}</p>}
            <a href={this.postUrl} aria-label={`Lire la suite : ${this.postTitle}`} target="_blank" rel="noopener noreferrer">
              <g33-button variant="secondary">Lire la suite</g33-button>
            </a>
          </div>
        </div>
      </article>
    );
  }
}
