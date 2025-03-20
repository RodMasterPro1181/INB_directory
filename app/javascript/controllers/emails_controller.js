import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["emails"];

  add(event) {
    event.preventDefault();

    // Clonar un campo de email existente o crear uno nuevo
    let newEmailField = document.createElement("div");
    newEmailField.innerHTML = `
      <input type="text" name="person[emails][]" class="input-field" required>
      <button type="button" data-action="click->email#remove">❌</button>
    `;

    this.emailsTarget.appendChild(newEmailField);
  }

  remove(event) {
    event.preventDefault();
    event.target.closest("div").remove();
  }
}


