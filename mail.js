function sendMail() {
  var body = document.getElementById("Message").value;
  var SubjectLine = document.getElementById("Subject").value;
  window.location.href =
    "mailto:paolavalera@gmail.com?subject=" + SubjectLine + "&Body=" + body;
}
