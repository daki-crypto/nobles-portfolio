document.addEventListener("DOMContentLoaded", () => {
  const headerTarget = document.getElementById("site-header");

  if (!headerTarget) {
    return;
  }

  fetch("header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Header file could not be loaded.");
      }

      return response.text();
    })
    .then((html) => {
      headerTarget.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
});
