//Take and download screenshot with html2canvas
function capture() {
  const captureElement = document.querySelector("#capture");
  html2canvas(captureElement, {
    backgroundColor: null,
  })
    .then((canvas) => {
      canvas.style.display = "none";
      document.body.appendChild(canvas);
      return canvas;
    })
    .then((canvas) => {
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const a = document.createElement("a");
      a.setAttribute("download", "image.png");
      a.setAttribute("href", image);
      a.click();
      canvas.remove();
    });
}

const btn = document.querySelector("#capture-btn");
btn.addEventListener("click", capture);

//Convert rich content to plain text in editable divs
let allEditableDivs = document.querySelectorAll('.contenteditable-plain');

[].forEach.call(allEditableDivs, function (el) {
  el.addEventListener('paste', function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  }, false);
});