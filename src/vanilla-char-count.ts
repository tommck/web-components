/**
 * An implementation of a character counting input written in plain TypeScript
 *
 * @attr {String} label-text - The label to use for the input box
 */
 export class VanillaCharCount extends HTMLElement {
    static get observedAttributes() {
      return ['label'];
    }
  
    private label!: HTMLLabelElement;
  
    constructor() {
      super();
  
      // Create a shadow root
      this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'
  
      // create a wrapper for the form input
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'input-wrapper');
      this.label = wrapper.appendChild(document.createElement('label'));
      // get the label from the attributes
      this.label.textContent = this.getAttribute('label') || 'DEFAULT LABEL';
      this.label.htmlFor = 'char-input';
  
      const input = wrapper.appendChild(document.createElement('input'));
      const span = wrapper.appendChild(document.createElement('span'));
      input.type = 'text';
      input.id = 'char-input';
      input.addEventListener('keyup', () => {
        span.innerText = `(${input.value?.length || 0} chars)`;
      });
  
      // Create some CSS to apply to the shadow dom
      const styleElement = document.createElement('style');
      styleElement.textContent = `.input-wrapper {
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
  
      if (!this.shadowRoot) {
        console.error('NO SHADOW ROOT!');
      } else {
        // attach the created elements to the shadow DOM
        this.shadowRoot.append(styleElement, wrapper);
      }
    }
  
    connectedCallback() {
      console.log('vanilla-element added to page.');
    }
  
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
      switch (name) {
        case 'label':
          this.label.innerText = newValue;
          break;
      }
    }
  }
  
  export const elementName = 'vanilla-char-count';
  
  customElements.define(elementName, VanillaCharCount);
  