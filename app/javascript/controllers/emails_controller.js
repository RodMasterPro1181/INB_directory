import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["emails", "template"];

  add(event) {
    event.preventDefault();

    const content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime());
    this.emailsTarget.insertAdjacentHTML("beforeend", content);
  }
}


