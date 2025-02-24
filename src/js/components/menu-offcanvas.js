import { LitElement, html, css } from "lit";

class MenuOffcanvas extends LitElement {
  // Menonaktifkan shadow DOM
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
            <li class="list-group-item">
              <a href="index.html"><i class="fas fa-home"></i> Dashboard</a>
            </li>
            <li class="list-group-item">
              <a href="profile.html"><i class="fas fa-user"></i> Profile</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define("menu-offcanvas", MenuOffcanvas);
