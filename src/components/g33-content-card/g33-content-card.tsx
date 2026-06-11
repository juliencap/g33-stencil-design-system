import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g33-content-card',
  styleUrl: 'g33-content-card.css',
  shadow: true,
})
export class G33ContentCard {
  @Prop() contentTitle!: string;
  @Prop() category!: string;
  @Prop() excerpt?: string;
  @Prop() imageUrl!: string;
  @Prop() author?: string;
  @Prop() publishedAt!: string;
  @Prop() publishedDateTime?: string;
  @Prop() showCta: boolean = false;
  @Prop() contentUrl: string = '#';

  render() {
    return (
      <article class="post actualite">
        <div class="featured-image">
          <a href={this.contentUrl}>
            <img src={this.imageUrl} alt={this.contentTitle} />
          </a>
        </div>

        <div class="article-content">
          <div class="meta">
            {this.category && <span class="category">{this.category}</span>}
            <time class="entry-date" dateTime={this.publishedDateTime}>
              {this.publishedAt}
            </time>
          </div>

          <header class="entry-header">
            <h2 class="entry-title">
              <a href={this.contentUrl}>{this.contentTitle}</a>
            </h2>
          </header>

          <div class="entry-content clearfix">
            {this.excerpt && <p class="entry-excerpt">{this.excerpt}</p>}

            {this.showCta && (
              <a class="entry-cta" href={this.contentUrl} aria-label={`Lire la suite : ${this.contentTitle}`} target="_blank" rel="noopener noreferrer">
                <g33-button variant="secondary">Lire la suite</g33-button>
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }
}
