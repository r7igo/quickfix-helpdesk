function estimate() {
 const issue = document.getElementById("issue").value;
 let msg = "";

 if (issue === "screen") msg = "Estimated time: 2-3 days. Typical cost: $80-$150.";
 else if (issue === "battery") msg = "Estimated time: same day. Typical cost: $60-$120.";
 else if (issue === "virus") msg = "Estimated time: 1 day. Typical cost: $40-$90.";
 else if (issue === "wifi") msg = "Estimated time: 30-60 min. Typical cost: $20-60$.";
 else msg = "Estimated time: varies. We'll diagnose it first.";

const box = document.getElementById("estimateResult");
if (box) {
 box.style.display = "block";
 box.textContent = msg;
 } else {
   alert(msg);
 }
}

function fakeSubmit() {
 const name = document.getElementById("name").value.trim();
 const issueText = document.getElementById("issueText").value.trim();

 const notice = document.getElementById("notice");

 if (!name || !issueText) {
  if (notice) {
    notice.textContent = "Please fill out your name and issue description.";
    notice.style.display = "block";
 } else {
   alert("Please fill out your name and issue description.");
 }
 return;
}
 if (notice) {
 notice.textContent = "Ticket submitted! We'll contact you shortly.";
 notice.style.display = "block";
 } else {
   alert("Ticket submitted! We'll contact you soon.");
}

const form = document.getElementById("ticketForm");
if (form) form.reset();
}
