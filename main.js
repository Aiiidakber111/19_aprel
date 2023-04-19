const image = document.getElementById("image");
const yazi = document.getElementById("yazi");
const inp = document.getElementById("inp");

inp.addEventListener("change", function (e) {
  console.log(e.target.files);
  let imageSrc = "";
  let text = "";
  const imageReader = new FileReader();
  const textReader = new FileReader();
  for (let i = 0; i < e.target.files.length; i++) {
    console.log(e.target.files);
    if (e.target.files[i].type == "image/jpeg") {
      imageReader.readAsDataURL(e.target.files[i]);
      imageReader.onload = function (e) {
        image.src = e.target.result;
      };
    } else if (e.target.files[i].type == "text/plain") {
      textReader.readAsText(e.target.files[i]);
      textReader.onload = function (e) {
        yazi.innerHTML = e.target.result;
      };
    } else {
      alert("duzgun file daxil edin !");
    }
  }
});