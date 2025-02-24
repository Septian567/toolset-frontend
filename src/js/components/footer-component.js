import { LitElement, html, css } from "lit";

class FooterComponent extends LitElement {
  static styles = css`
    footer {
      text-align: center;
      padding: 10px;
      background-color: #f8f9fa;
      bottom: 0;
    }
  `;

  render() {
    return html`
      <footer>
        <p class="mb-0">© 2025 Story App. All Rights Reserved.</p>
      </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
