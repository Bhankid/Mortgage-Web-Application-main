document.getElementById("browse-file").addEventListener("change", function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("selected-picture").src = event.target.result;
    };
    reader.readAsDataURL(file);
  });