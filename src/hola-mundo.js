import { LitElement, html } from "lit-element";

class HolaMundo extends LitElement {

  render() {
    return html`
      <p>Hola mundo desde LitElement</p>
    `;
  }

}

customElements.define('hola-mundo', HolaMundo);