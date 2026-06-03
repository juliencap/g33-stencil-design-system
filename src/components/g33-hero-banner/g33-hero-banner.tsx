import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g33-hero-banner',
  styleUrl: 'g33-hero-banner.css',
  shadow: true,
})
export class G33HeroBanner {
  @Prop() titleText!: string;
  @Prop() subtitle?: string;
  @Prop() imageUrl?: string;
  @Prop() imageAlt?: string;

  @Prop() ctaLabel?: string;
  @Prop() ctaUrl?: string;
  @Prop() ctaTarget?: string;

  render() {
    return (
      <section class="hero-banner">
        {this.imageUrl && <img class="hero-banner__image" src={this.imageUrl} alt={this.imageAlt || ''} />}

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1>{this.titleText}</h1>

          {this.subtitle && <p>{this.subtitle}</p>}

          {this.ctaUrl && this.ctaLabel && (
            <a href={this.ctaUrl} target={this.ctaTarget} rel={this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined}>
              <g33-button variant="ghost">{this.ctaLabel}</g33-button>
            </a>
          )}
        </div>
      </section>
    );
  }
}
