import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["emails", "template"];

  connect() {
    console.log("📧 Controlador de emails cargado");
  }

  add(event) {
    event.preventDefault();

    const newIndex = new Date().getTime().toString(); // Generar un índice único
    const templateHTML = this.templateTarget.innerHTML.replace(/NEW_INDEX/g, newIndex);
    
    this.emailsTarget.insertAdjacentHTML("beforeend", templateHTML);
  }

  remove(event) {
    event.preventDefault();
    const emailEntry = event.target.closest(".email-entry");

    if (emailEntry.dataset.newRecord === "true") {
      emailEntry.remove();  // Eliminar del DOM si es un nuevo campo
    } else {
      // Marcar el campo como eliminado y ocultarlo en la UI
      emailEntry.querySelector("input[name*='_destroy']").value = "1";
      emailEntry.style.display = "none";
    }
  }
}




