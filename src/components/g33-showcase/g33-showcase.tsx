import { Component, h } from '@stencil/core';

@Component({
  tag: 'g33-showcase',
  styleUrl: 'g33-showcase.css',
  shadow: true,
})
export class G33Showcase {
  render() {
    return (
      <main>
        <h1>G33 Design System</h1>

        <section>
          <h2>Buttons</h2>

          <div class="demo-row">
            <g33-button size="sm">Petit</g33-button>
            <g33-button size="md">Moyen</g33-button>
            <g33-button size="lg">Grand</g33-button>
          </div>

          <div class="demo-row">
            <g33-button variant="secondary">Secondaire</g33-button>
            <g33-button disabled>Désactivé</g33-button>
          </div>
        </section>

        <section>
          <h2>Alerts</h2>

          <g33-alert type="info">Informations sur le mercato</g33-alert>

          <g33-alert type="success">Article publié avec succès</g33-alert>

          <g33-alert type="warning">Rumeur non confirmée</g33-alert>

          <g33-alert type="error">Erreur de chargement</g33-alert>
        </section>
      </main>
    );
  }
}
