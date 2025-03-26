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
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const application = Application.start();
const context = require.context("../controllers", true, /\.js$/);
application.load(definitionsFromContext(context));



  