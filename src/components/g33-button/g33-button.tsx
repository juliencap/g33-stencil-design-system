import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g33-button',
  styleUrl: 'g33-button.css',
})
export class G33Button {
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button class={`button button--${this.variant} button--${this.size}`} disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
