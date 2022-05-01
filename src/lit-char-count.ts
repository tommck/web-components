import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";

const styles = css`
  .input-wrapper {
    padding: 1em;
    background-color: var(--input-bg-color, cyan);
    color: var(--input-color, red);
  }

  label {
    padding: 1em;
  }

  input {
    margin-right: 1em;
  }
`;

@customElement("lit-char-count")
export class LitCharCount extends LitElement {
  static styles = styles;

  @property()
  label = "Default Label";

  charInput = createRef<HTMLInputElement>();

  @property()
  private charsText = "";

  render() {
    return html`
      <div class="input-wrapper">
        <label for="char-input" aria-label="${this.label}">${this.label}</label>
        <input
          ${ref(this.charInput)}
          id="char-input"
          type="text"
          @keyup=${this.keyUpHandler}
        />
        <span>${this.charsText}</span>
      </div>
    `;
  }

  labelChanged() {
    console.log(">>>> LABEL CHANGED", this.label);
  }

  keyUpHandler(e: Event) {
    const input = (e.target as HTMLInputElement);
    this.charsText = `(${input.value?.length ?? 0} chars)`;
  }
}
