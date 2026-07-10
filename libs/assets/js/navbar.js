(() => {
  const mount = document.getElementById("site-header");

  if (!mount) {
    return;
  }

  const isInnerPage = window.location.pathname.includes("/main/");
  const root = isInnerPage ? "../" : "";
  const main = isInnerPage ? "" : "main/";
  const routes = {
    home: `${root}index.html`,
    resume: `${main}resume.html`,
    projects: `${main}projects.html`,
    practicum: `${main}practicum.html`,
    contact: `${main}contact.html`,
  };
  const fallbackHeader = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div class="container px-5">
        <a class="navbar-brand" data-route="home" href="#">
          <span class="fw-bolder text-primary">Nobles Portfolio</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item"><a class="nav-link" data-route="home" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" data-route="resume" href="#">Resume</a></li>
            <li class="nav-item"><a class="nav-link" data-route="projects" href="#">Projects</a></li>
            <li class="nav-item"><a class="nav-link" data-route="practicum" href="#">Practicum</a></li>
            <li class="nav-item"><a class="nav-link" data-route="contact" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  const renderHeader = (headerMarkup) => {
    mount.innerHTML = headerMarkup;

    mount.querySelectorAll("[data-route]").forEach((link) => {
      const route = link.dataset.route;
      link.href = routes[route];
    });
  };

  renderHeader(fallbackHeader);

  fetch(`${root}libs/partials/header.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Header partial could not be loaded.");
      }

      return response.text();
    })
    .then(renderHeader)
    .catch(() => {
      renderHeader(fallbackHeader);
    });
})();