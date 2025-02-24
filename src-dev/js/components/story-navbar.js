import { LitElement, html, css } from "lit";

class StoryNavbar extends LitElement {
  static styles = css`
    .navbar {
      background-color: #007bff;
      color: white;
      padding: 10px;
    }
  `;

  render() {
    return html`
      <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <button class="btn btn-light" @click="${this._toggleMenu}">
            ☰ Menu
          </button>
          <span class="navbar-brand mx-auto">Story App</span>
        </div>
      </nav>
    `;
  }

  _toggleMenu() {
    this.dispatchEvent(
      new CustomEvent("toggle-menu", { bubbles: true, composed: true })
    );
  }
}

customElements.define("story-navbar", StoryNavbar);
