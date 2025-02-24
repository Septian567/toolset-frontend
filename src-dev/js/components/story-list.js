import { LitElement, html } from "lit";
import "./story-card.js";

class StoryList extends LitElement {
  static properties = {
    stories: { type: Array },
  };

  render() {
    return html`
      <div class="row">
        ${this.stories.map(
          (story) => html`
            <story-card
              .story="${story}"
              @show-detail="${this._showDetail}"
              @delete-story="${this._deleteStory}"
            ></story-card>
          `
        )}
      </div>
    `;
  }

  _showDetail(event) {
    this.dispatchEvent(
      new CustomEvent("show-detail", {
        detail: event.detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  _deleteStory(event) {
    this.dispatchEvent(
      new CustomEvent("delete-story", {
        detail: event.detail,
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("story-list", StoryList);
