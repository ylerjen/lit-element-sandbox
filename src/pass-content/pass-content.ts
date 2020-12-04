import { LitElement, html, property, customElement, css, unsafeCSS } from 'lit-element';
import styles from './pass-content.scss';

@customElement('pass-content')
export class PassContent extends LitElement {

    render() {
        return html`<section>
            <h1>Passed content is below</h1>
            <p>Check in the DevTools how it's strangely included.</p>
            <slot name="content"></slot>
        </section>`;
    }

    static get styles() {
        return [
            css`${unsafeCSS(styles)}`
        ];
    }
}
