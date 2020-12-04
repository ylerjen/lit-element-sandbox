import { LitElement, html, property, customElement, css, unsafeCSS } from 'lit-element';
import styles from './internal-event.scss';

@customElement('internal-event')
export class InternalEvent extends LitElement {
    @property()
    nbClick = 0;

    _handleClick(evt: Event): void {
        evt.preventDefault();
        this.nbClick++;
    }

    render() {
        return html`<div>
            <p>Button clicked ${this.nbClick}!!</p>
            <button class="btn" @click="${this._handleClick}">Click me!</button>
        </div>`;
    }

    static get styles() {
        return [
            css`${unsafeCSS(styles)}`
        ];
    }
}
