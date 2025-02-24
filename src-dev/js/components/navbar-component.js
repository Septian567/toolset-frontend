import { LitElement, html, css } from "lit";

class NavbarComponent extends LitElement {
  static styles = css`
    .navbar {
      background-color: #0d6efd;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
    }
    .menu-button {
      background: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 18px;
    }
    .brand {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <nav class="navbar">
        <button class="menu-button" @click="${this.openMenu}">☰ Menu</button>
        <span class="brand">Story App</span>
      </nav>
    `;
  }

  openMenu() {
    const offcanvas = document.getElementById("offcanvasMenu");
    if (offcanvas) {
      new bootstrap.Offcanvas(offcanvas).show();
    }
  }
}

customElements.define("navbar-component", NavbarComponent);
