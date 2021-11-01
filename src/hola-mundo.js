// import { LitElement, html } from "lit-element";
import { LitElement, html } from "lit-element/lit-element";

class HolaMundo extends LitElement {

  static get properties(){
    return {
      quien: { type: String }
    }
  }

  render() {
    return html`
      <p>Hola <b>${this.quien}</b>!! desde LitElement</p>
    `;
  }

}

customElements.define('hola-mundo', HolaMundo);