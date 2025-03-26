import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["emails", "template"];

  connect() {
    console.log("📧 Controlador de emails cargado");
  }

  add(event) {
    event.preventDefault();
    const newEmail = this.templateTarget.content.cloneNode(true);
    newEmail.querySelector("input").removeAttribute("disabled"); // Habilitar campo oculto
    this.emailsTarget.appendChild(newEmail);
  }

  remove(event) {
    event.preventDefault();
    const emailEntry = event.target.closest(".email-entry");
    
    if (emailEntry.dataset.newRecord === "true") {
      // Si es un nuevo email, lo eliminamos del DOM
      emailEntry.remove();
    } else {
      // Si es un email existente, marcamos el campo oculto `_destroy`
      emailEntry.querySelector("input[name*='_destroy']").value = "1";
      emailEntry.style.display = "none"; // Ocultar en la UI
    }
  }
}



