import { LitElement, html, css } from "lit";

class StoryMenu extends LitElement {
  static styles = css`
    .offcanvas {
      width: 250px;
    }
  `;

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

customElements.define("story-menu", StoryMenu);
