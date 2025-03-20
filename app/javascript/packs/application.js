import "../stylesheets/application.scss";
import Rails from "@rails/ujs";
import "controllers"
Rails.start()
import "@fortawesome/fontawesome-free/css/all.css";
document.addEventListener("DOMContentLoaded", function () {
    const languageDropdown = document.querySelector(".language-dropdown");
    const languageMenu = document.querySelector(".dropdown-menu");
  
    function toggleLanguageMenu() {
      languageMenu.classList.toggle("active");
    }
  
    languageDropdown.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que se cierre inmediatamente
      toggleLanguageMenu();
    });
  
    // Cierra el menú si el usuario hace clic fuera de él
    document.addEventListener("click", function (event) {
      if (!languageDropdown.contains(event.target)) {
        languageMenu.classList.remove("active");
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".remove-email").forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      let emailGroup = this.closest(".email-group");
      emailGroup.querySelector("input[type='hidden']").value = "1"; // Marcar para eliminación
      emailGroup.style.display = "none"; // Ocultar en la vista
    });
  });
});

import { Application } from "@hotwired/stimulus"
import EmailController from "./controllers/email_controller"

const application = Application.start()
application.register("email", EmailController)

  