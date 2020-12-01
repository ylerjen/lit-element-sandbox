import { LitElement, html, property, customElement, css, unsafeCSS } from 'lit-element';
import styles from './simple-greeting.scss';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    @property() name = 'World';

    render() {
        return html`<p>Hello, ${this.name}!!</p>`;
    }

    static get styles() {
        return [
            css`${unsafeCSS(styles)}`
        ];
    }
}
