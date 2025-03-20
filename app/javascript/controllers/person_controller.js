import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["emailsContainer"]

  autosave(event) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.element.requestSubmit()
    }, 500) // Guarda automáticamente después de 0.5 segundos de inactividad
  }

  addEmail(event) {
    event.preventDefault()
    
    // Encuentra el contenedor de emails
    const emailsContainer = this.element.querySelector(".emails-container")
    
    // Crea un nuevo campo de email basado en los existentes
    const index = emailsContainer.querySelectorAll(".email-group").length
    const newEmail = document.createElement("div")
    newEmail.classList.add("email-group")
    newEmail.innerHTML = `
      <label>Correo Electrónico</label>
      <input type="text" name="person[emails_attributes][${index}][email]" class="input-field">
      <input type="hidden" name="person[emails_attributes][${index}][id]">
      <input type="checkbox" name="person[emails_attributes][${index}][_destroy]">
      <label>Eliminar email</label>
    `
    emailsContainer.appendChild(newEmail)
  }
}
