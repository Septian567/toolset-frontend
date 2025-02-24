import { LitElement, html, css } from "lit";

class OffcanvasHeader extends LitElement {
  static styles = css`
    .offcanvas-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #dee2e6;
      background-color: #f8f9fa;
    }
    .offcanvas-title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: bold;
    }
    .btn-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menu</h5>
        <button type="button" class="btn-close" @click=${this._close}></button>
      </div>
    `;
  }

  _close() {
    const event = new CustomEvent("close-offcanvas", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define("offcanvas-header", OffcanvasHeader);
