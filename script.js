let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

// Side-menu
let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


//see more button

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById('see-more-btn');
  const hiddenWorks = document.querySelectorAll('.work.hidden');
  let isExpanded = false;

  btn.addEventListener('click', () => {
    hiddenWorks.forEach(work => {
      work.classList.toggle('hidden'); // toggle hidden class

      // Optional: smooth scroll to the new items
      if (!isExpanded) {
        work.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    btn.textContent = isExpanded ? 'See More' : 'See Less';
    isExpanded = !isExpanded;
  });
});


// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyTr9ABt0fMjK995Kwe0ey-qRxxz9oAd0FepkbIElPTFlCmcJH4gi1smO_LXqALRLlVRw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();

  msg.innerHTML = "Sending...";
  msg.style.color = "#ffb700"; // yellowish while waiting

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "✅ Message sent successfully!";
      msg.style.color = "#61b752"; // green
      setTimeout(() => { msg.innerHTML = ""; }, 5000);
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "❌ Failed to send. Try again!";
      msg.style.color = "red";
      setTimeout(() => { msg.innerHTML = ""; }, 5000);
      console.error('Error!', error.message);
    });
});

