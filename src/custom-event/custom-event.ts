import { LitElement, html, property, customElement, css, unsafeCSS } from 'lit-element';
import styles from './custom-event.scss';

@customElement('custom-event-component')
export class CustomEventComponent extends LitElement {
    @property()
    nbClick = 0;

    customClickedEvent: Event;

    _handleClick(evt: Event): void {
        evt.preventDefault();
        this.nbClick++;

        this.dispatchCustomClickEvent();
    }

    dispatchCustomClickEvent(): void {
        const customEvent = new CustomEvent('customclick', {
            detail: {
                timestamp: Date.now()
            }
        });
        this.dispatchEvent(customEvent);
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
