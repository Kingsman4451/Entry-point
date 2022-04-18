var elScore = document.querySelector("#score");
var elSelect = document.querySelector("#unversity__name");
var elBtn = document.querySelector("button");
var elOutput = document.querySelector(".result");
var result = document.querySelector(".result__text");
var superContactScore = 56
var contractScore = 85;
var grandScore = 130;
var arrUniver = ["Texnika", "Moliya", "SAMDU", "TOSHMI", "UZMU"];

for (var univer of arrUniver) {
  var newOption = document.createElement("option");
  newOption.textContent = univer;
  newOption.value = univer;
  elSelect.append(newOption);
}


elBtn.addEventListener("click",(e) => {
  e.preventDefault();


  if(elScore.value >= 0 && elScore.value < superContactScore) {
    result.textContent = `Afsus. Siz ${elSelect.value} Unvarsitetiga talaba sifatida tavsiya etilmadingiz`;
    result.style.backgroundColor = "#e97878d7";
    result.style.borderColor = "#d55e5e";
  }else if(elScore.value >= superContactScore && elScore.value < contractScore) {
    result.textContent = `Afsus. Siz ${elSelect.value} Unvarsitetiga talaba sifatida tavsiya etilmadingiz, lekin superkontrakt asosida o'qishingiz mumkin`;
    result.style.backgroundColor = "#d5935ece";
    result.style.borderColor = "#d5935e";
  }else if(elScore.value >= contractScore && elScore.value < grandScore) {
    result.textContent = `Tabriklaymiz siz ${elSelect.value} Unversitetiga To'lov shartnoma asosida talaba sifatida tavsiya etildingiz`
    result.style.backgroundColor = "#5e8cd5ce";
    result.style.borderColor = "#5e8cd5";
  }else if(elScore.value >= grandScore && elScore.value < 284) {
    result.textContent = `Tabriklaymiz siz ${elSelect.value} Unversitetiga budget asosida talaba sifatida tavsiya etildingiz`
    result.style.backgroundColor = "#5ed560d9";
    result.style.borderColor = "#5ed560";
  }else {
    result.textContent = "Iltimos tug'ri ball kirgizing!!! Ballar oralig'i minimal 0 balldan 289 ballgach belgilangan"
    result.style.backgroundColor = "#dc2a2ab8";
    result.style.borderColor = "#dc2a2a";
  }
  if(elScore.value == ""){
    result.textContent = "Javob shu yerda chiqadi";
    result.style.backgroundColor = "rgba(13, 109, 253, 0.61)";
    result.style.borderColor = "#2b71da";
  }
})
