import { LitElement, html, css } from "lit";

class StoryCard extends LitElement {
  static properties = {
    story: { type: Object },
  };

  static styles = css`
    .card {
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    }
    .delete-btn {
      cursor: pointer;
      color: red;
      border: none;
      background: none;
    }
  `;

  render() {
    return html`
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card h-100 shadow-sm">
          <img
            src="${this.story.photoUrl}"
            class="card-img-top"
            alt="${this.story.name}"
          />
          <div class="card-body">
            <h5 class="card-title text-primary" @click="${this._showDetail}">
              ${this.story.name}
            </h5>
            <p class="card-text">
              ${this.story.description.substring(0, 100)}...
            </p>
            <small class="text-muted"
              >📅 ${new Date(this.story.createdAt).toLocaleDateString()}</small
            >
            <button class="delete-btn" @click="${this._deleteStory}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  _showDetail() {
    this.dispatchEvent(
      new CustomEvent("show-detail", {
        detail: this.story,
        bubbles: true,
        composed: true,
      })
    );
  }

  _deleteStory() {
    this.dispatchEvent(
      new CustomEvent("delete-story", {
        detail: this.story,
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("story-card", StoryCard);
