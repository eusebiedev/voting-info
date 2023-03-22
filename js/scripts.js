window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let minors = document.getElementById("minors");
    minors.setAttribute("class", "hidden");
    let legalage = document.getElementById("legalage");
    legalage.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age < 18) {  // updated to check if age is greater than 21
      minors.removeAttribute("class");
    } else if (age === 18) { // new else if statement
      window.alert("");
      legalage.removeAttribute("class");
    } else {
      legalage.removeAttribute("class");
    }
  };
};