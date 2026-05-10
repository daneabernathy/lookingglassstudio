window.initLightboxGallery = function () {
  if (document.querySelectorAll("[data-bss-baguettebox]").length > 0) {
    baguetteBox.run("[data-bss-baguettebox]", { animation: "slideIn" });
  }
};

if (!window.deferLightboxGalleryInit) {
  window.initLightboxGallery();
}
