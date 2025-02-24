import { LitElement, html, css } from "lit";

class HeaderComponent extends LitElement {
  static styles = css`
    .navbar {
      background-color: #0d6efd;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1030;
    }
    .btn-light {
      font-size: 1.2rem;
    }
    .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
  `;

  render() {
    return html`
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
          <button
            class="btn btn-light"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
          >
            ☰ Menu
          </button>
          <span class="navbar-brand mx-auto">Story App</span>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
