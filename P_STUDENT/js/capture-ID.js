const downloadBtn = document.getElementById("download-btn");
const idCard = document.querySelector("#container");

downloadBtn.addEventListener("click", () => {
  html2canvas(idCard).then((canvas) => {
    canvas.toBlob((blob) => {
      saveAs(blob, "id-card.jpg");
    });
  });
});
