import { LitElement, html } from "lit-element/lit-element";

export class MyCounter extends LitElement {
    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    /**
     * Instance of the element is created/upgraded. Useful for initializing
     * state, set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
            <div> Llevas ${this.counter} clicks!!</div>
            <div>
                <button @click="${this.incrementar}">+</button>
                <button @click="${this.decrementar}">-</button>
            </div>
        `;
    }
    
    incrementar(){
        this.counter++;    
    }
    decrementar(){
        this.counter--;    
    }
}
customElements.define('my-counter', MyCounter);