import {
    attr,
    css,
    customElement,
    FASTElement,
    html,
    ref
  } from '@microsoft/fast-element';
  
  const template = html<FastCharCount>`
  <div class="input-wrapper">
    <label for="char-input" aria-label="${x => x.label}">${x => x.label}</label>
    <input ${ref('charInput')} id="char-input" type="text" @keyup="${x => x.keyUpHandler()}"/>
    <span ${ref('countSpan')}></span>
  </div> `;
  
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
  
  `
  
  @customElement({
    name: 'fast-char-count',
    template,
    styles
  })
  export class FastCharCount extends FASTElement {
  
    @attr label = "Default Label";
  
    countSpan!: HTMLSpanElement;
    charInput!: HTMLInputElement;
  
    labelChanged() {
      console.log(">>>> LABEL CHANGED", this.label)
    }
  
    keyUpHandler() {
      this.countSpan.innerText = `(${this.charInput.value?.length || 0} chars)`;
    }
  }
  