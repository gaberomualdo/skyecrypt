function updateCipher(){
  var cipher_text = document.querySelector("div.col.input").innerText;
  var cipher = document.querySelector("div.col.middle select").value;
  var encode_or_decode = document.querySelector("div.col.middle ul.mode button.active").getAttribute("id");
  var params = [];
  if(cipher == "Caesar Cipher"){
    document.querySelector("div.col.middle div.row.caesar_shift").removeAttribute("style");
    params = [Math.abs(document.querySelector("div.col.middle div.row.caesar_shift input").value)];
  }else{
    document.querySelector("div.col.middle div.row.caesar_shift").setAttribute("style", "display: none;");
  }

  if(cipher == "Vigenere Cipher"){
    document.querySelector("div.col.middle div.row.vigenere_keyword").removeAttribute("style");
    params = [document.querySelector("div.col.middle div.row.vigenere_keyword input").value];
  }else{
    document.querySelector("div.col.middle div.row.vigenere_keyword").setAttribute("style", "display: none;");
  }
  try{
    if(encode_or_decode == "encode"){
      document.querySelector("div.col.end").innerText = Ciphers.encode(cipher, cipher_text, params);
    }else{
      document.querySelector("div.col.end").innerText = Ciphers.decode(cipher, cipher_text, params);
    }
  }catch(err){
    document.querySelector("div.col.end").innerHTML = "<span>" + (err) + "</span>";
  }
}
function checkCaesarShift(input){
  var val = input.value;
  if(input.value < 0){
    input.value = 0;
  }
  if(input.value > 26){
    input.value = 26;
  }
  if(input.value == ""){
    input.value = 0;
  }
}
function checkVigenereKeyword(input){
  var val = input.value.toLowerCase();
  var newVal = "";
  val = val.split("");
  val.forEach(function(char){
    if(Ciphers.alphabet.indexOf(char) != -1){
      newVal += char;
    }
  });
  input.value = newVal;
}
function changeMode(input){
  if(!input.getAttribute("class")){
    document.querySelector("div.col.input").innerText = "";
  }
  document.querySelector('ul.mode button.active').classList.remove('active');
  input.classList.add('active');
  document.querySelector("div.col.input").focus();
}
