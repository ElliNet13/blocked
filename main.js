const reasonElement = document.getElementById("reason");

function escapeHTML(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

var params = new URLSearchParams(window.location.search);
var r = params.get('r');
if (r) {
  reasonElement.innerHTML = `Reason: ${escapeHTML(r)}`;
}