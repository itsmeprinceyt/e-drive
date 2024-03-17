document.querySelector('.icon').addEventListener('click',() =>
{
  myFunction();
});
document.getElementById('whatsappButton').addEventListener('click', function() {
  window.location.href = 'https://wa.link/q52old';
});
document.getElementById('whatsappbroadcastbutton').addEventListener('click', function() {
  window.location.href = 'https://whatsapp.com/channel/0029VaJwSV32ZjCuU1Fuue3u';
});
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
