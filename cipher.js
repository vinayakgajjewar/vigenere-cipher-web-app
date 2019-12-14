function generateKey(text, key) {
  newKey = key;
  x = text.length;
  for (i = 0; true; i++) {
    if (i == x) {
      i = 0;
    }
    if (newKey.length == text.length) {
      break;
    }
    newKey += newKey.charAt(i);
  }
  return newKey;
}

function encrypt(plaintext, key) {
  newKey = generateKey(plaintext, key);

  ciphertext = "";
  for (i = 0; i < plaintext.length; i++) {
    p = plaintext.charCodeAt(i) - 97;
    n = newKey.charCodeAt(i) - 97;

    ciphertext += String.fromCharCode(((p + n) % 26) + 97)
  }
  return ciphertext;
}

function decrypt(ciphertext, key) {
  newKey = generateKey(ciphertext, key);

  plaintext = "";
  for (i = 0; i < ciphertext.length; i++) {
    c = ciphertext.charCodeAt(i) - 97;
    n = newKey.charCodeAt(i) - 97;

    plaintext += String.fromCharCode(((c - n + 26) % 26) + 97);
  }
  return plaintext;
}

$(document).ready(function() {
  $("#encrypt").click(function() {
    plaintext = $("#plaintextInput").val();
    key = $("#keyEncryptInput").val();
    $("#output").text(encrypt(plaintext, key));
    //console.log(encrypt(plaintext, key));
  });

  $("#decrypt").click(function() {
    ciphertext = $("#ciphertextInput").val();
    key = $("#keyDecryptInput").val();
    $("#output").text(decrypt(ciphertext, key));
    //console.log(decrypt(ciphertext, key));
  });
});