// import { LitElement, html } from "lit-element/lit-element";
import { LitElement, html } from "lit-element";
// import { LitElement, html } from "lit";
// import { customElement } from 'lit/decorators.js';

// @customElement('hola-mundo')
export class HolaMundo extends LitElement {

  static get properties(){
    return {
      quien: { type: String }
    }
  }

  // @property()
  // quien?: string = 'Gus';
  render() {
    return html`
      <p>Hola <b>${this.quien}</b>!! desde LitElement</p>
    `;
  }

}

customElements.define('hola-mundo', HolaMundo);
