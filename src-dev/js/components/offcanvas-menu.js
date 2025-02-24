import { LitElement, html, css } from "lit";
import { unsafeCSS } from "lit/directives/unsafe-css.js";
import "bootstrap/dist/css/bootstrap.min.css";

class OffcanvasMenu extends LitElement {
  static styles = unsafeCSS(`
    .offcanvas-body {
      padding: 1rem;
    }
    .list-group-item a {
      text-decoration: none;
      color: black;
    }
    .list-group-item a:hover {
      color: #007bff;
    }
  `);

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="offcanvas offcanvas-start" id="offcanvasMenu">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group">
            <li class="list-group-item"><a href="index.html">Dashboard</a></li>
            <li class="list-group-item"><a href="profile.html">Profile</a></li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define("offcanvas-menu", OffcanvasMenu);
