import { LitElement, html, css } from "lit";

class AppNavbar extends LitElement {


  // Menonaktifkan Shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <a href="index.html" class="btn btn-light">⬅ Kembali</a>
          <span class="navbar-brand mx-auto">Tambah Story</span>
        </div>
      </nav>
    `;
  }
}

customElements.define("app-navbar", AppNavbar);
