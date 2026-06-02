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

          <g33-alert type="success">Article publié avec succès</g33-alert>

          <g33-alert type="warning">Article en cours d'édition</g33-alert>

          <g33-alert type="error">Article supprimé</g33-alert>
        </section>

        <section>
          <h2>Article card</h2>

          <g33-article-card
            postTitle="Christophe Dugarry : « On a un président, un actionnaire, qui est transparent. Il n’y a rien d’humain dans ce club. »"
            category="Médias"
            excerpt="Dans l’émission Rothen s’enflamme (RMC), Christophe Dugarry a donné son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils..."
            imageUrl="https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp"
            author="Julien"
            publishedAt="27 février 2025"
            postUrl="https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club"
          ></g33-article-card>
        </section>

        <section>
          <h2>Hero simple</h2>
          <g33-hero-banner titleText="Toute l'actualité des Girondins" imageUrl="https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp" />

          <h2>Hero avec sous-titre</h2>
          <g33-hero-banner
            titleText="Toute l'actualité des Girondins"
            subtitle="Mercato, analyses et réactions"
            imageUrl="https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp"
          />

          <h2>Hero</h2>
          <g33-hero-banner
            titleText="Toute l'actualité des Girondins"
            subtitle="Mercato, analyses, interviews et réactions autour du club"
            imageUrl="https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp"
            ctaLabel="Voir les articles"
            ctaUrl="#"
          />
        </section>
      </main>
    );
  }
}
