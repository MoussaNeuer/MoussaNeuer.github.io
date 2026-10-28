(function () {
  "use strict";

  var root = document.documentElement;
  var EMAIL = "ml.moussalo1@gmail.com";
  var themeButton = document.getElementById("theme-toggle");
  var menuButton = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");
  var form = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  var copyButton = document.getElementById("copy-email");
  var copyStatus = document.getElementById("copy-status");
  var filterStatus = document.getElementById("filter-status");

  /* ---------- Storage (never throws) ---------- */

  var storage = {
    get: function (key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },
    set: function (key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        /* Le thème reste appliqué pour la session, sans persistance. */
      }
    }
  };

  /* ---------- Thème clair / sombre ---------- */

  function setTheme(theme, persist) {
    var dark = theme === "dark";

    root.dataset.theme = dark ? "dark" : "light";

    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(dark));
      themeButton.setAttribute(
        "aria-label",
        dark ? "Activer le thème clair" : "Activer le thème sombre"
      );
    }

    if (persist) {
      storage.set("theme", dark ? "dark" : "light");
    }
  }

  if (themeButton) {
    setTheme(root.dataset.theme === "dark" ? "dark" : "light", false);

    themeButton.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });
  }

  if (window.matchMedia) {
    var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemThemeChange = function (event) {
      if (storage.get("theme") === null) {
        setTheme(event.matches ? "dark" : "light", false);
      }
    };

    if (colorScheme.addEventListener) {
      colorScheme.addEventListener("change", onSystemThemeChange);
    } else if (colorScheme.addListener) {
      colorScheme.addListener(onSystemThemeChange);
    }
  }

  /* ---------- Navigation mobile ---------- */

  function menuIsOpen() {
    return menuButton && menuButton.getAttribute("aria-expanded") === "true";
  }

  function setMenu(open, returnFocus) {
    if (!nav || !menuButton) {
      return;
    }

    var menuLabel = menuButton.querySelector(".menu-toggle-label");

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    menuButton.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);

    if (menuLabel) {
      menuLabel.textContent = open ? "Fermer" : "Menu";
    }

    if (!open && returnFocus) {
      menuButton.focus({ preventScroll: true });
    }
  }

  if (nav && menuButton) {
    menuButton.addEventListener("click", function () {
      setMenu(!menuIsOpen(), false);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false, false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuIsOpen()) {
        setMenu(false, true);
      }
    });

    document.addEventListener("click", function (event) {
      if (
        menuIsOpen() &&
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        setMenu(false, false);
      }
    });

    var desktopQuery = window.matchMedia("(min-width: 881px)");
    var closeOnDesktop = function (event) {
      if (event.matches) {
        setMenu(false, false);
      }
    };

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", closeOnDesktop);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(closeOnDesktop);
    }
  }

  /* ---------- Filtres projets ---------- */

  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var projects = Array.prototype.slice.call(document.querySelectorAll(".project"));

  function applyFilter(filter, announce) {
    var visible = 0;

    projects.forEach(function (project) {
      var matches = filter === "all" || project.dataset.category === filter;
      project.hidden = !matches;
      if (matches) {
        visible += 1;
      }
    });

    filterButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });

    if (announce && filterStatus) {
      filterStatus.textContent =
        visible + " projet" + (visible > 1 ? "s" : "") +
        " affiché" + (visible > 1 ? "s" : "") + ".";
    }
  }

  if (projects.length && filterButtons.length) {
    applyFilter("all", false);

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button.dataset.filter || "all", true);
      });
    });
  }

  /* ---------- Préremplir le type de demande depuis les services ---------- */

  var requestType = document.getElementById("request-type");

  document.querySelectorAll("[data-service]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!requestType) {
        return;
      }

      var value = link.dataset.service;
      var exists = Array.prototype.some.call(requestType.options, function (option) {
        return option.value === value;
      });

      if (exists) {
        requestType.value = value;
      }
    });
  });

  /* ---------- Formulaire : préparation d'un e-mail ---------- */

  function setFormStatus(message, type) {
    if (!formStatus) {
      return;
    }

    formStatus.textContent = message;
    formStatus.classList.remove("is-success", "is-error");

    if (type) {
      formStatus.classList.add("is-" + type);
    }
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        setFormStatus("Merci de compléter les champs signalés.", "error");
        return;
      }

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();
      var typeSelect = document.getElementById("request-type");
      var typeLabel = "Demande";

      if (typeSelect && typeSelect.selectedIndex >= 0) {
        typeLabel = typeSelect.options[typeSelect.selectedIndex].textContent.trim();
      }

      var subject = "[Portfolio] " + typeLabel + " — " + name;
      var body = [
        "Nom : " + name,
        "E-mail : " + email,
        "Type de demande : " + typeLabel,
        "",
        message,
        "",
        "— Message préparé depuis le portfolio de Moussa Lo."
      ].join("\n");

      var mailto =
        "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      setFormStatus(
        "Votre application e-mail devrait s’ouvrir avec le message prérempli. " +
        "Si rien ne se passe, écrivez à " + EMAIL + ".",
        "success"
      );

      window.location.href = mailto;
    });
  }

  /* ---------- Copier l'adresse e-mail ---------- */

  function legacyCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    document.body.appendChild(field);
    field.select();

    var copied = false;
    try {
      copied = document.execCommand("copy");
    } finally {
      document.body.removeChild(field);
    }

    if (!copied) {
      throw new Error("copy-failed");
    }
  }

  function showCopyStatus(message, isError) {
    if (copyStatus) {
      copyStatus.textContent = message;
      copyStatus.classList.toggle("is-error", Boolean(isError));
    }

    if (copyButton) {
      copyButton.textContent = isError ? "Copier" : "Copié";
      window.setTimeout(function () {
        copyButton.textContent = "Copier";
      }, 2500);
    }
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var email = copyButton.dataset.email || EMAIL;
      var copyAction;

      if (navigator.clipboard && window.isSecureContext) {
        copyAction = navigator.clipboard.writeText(email);
      } else {
        copyAction = Promise.resolve().then(function () {
          legacyCopy(email);
        });
      }

      copyAction.then(
        function () {
          showCopyStatus("Adresse copiée : " + email, false);
        },
        function () {
          showCopyStatus("Copie automatique impossible. Adresse : " + email, true);
        }
      );
    });
  }

  /* ---------- Année du pied de page ---------- */

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
