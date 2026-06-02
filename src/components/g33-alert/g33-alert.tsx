import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g33-alert',
  styleUrl: 'g33-alert.css',
  shadow: true,
})
export class G33Alert {
  @Prop() type: 'info' | 'success' | 'warning' | 'error' = 'info';

  render() {
    return (
      <div class={`alert alert--${this.type}`}>
        <slot></slot>
      </div>
    );
  }
}
