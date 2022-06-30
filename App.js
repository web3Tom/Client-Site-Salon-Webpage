// Reveal on Scroll CSS
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    console.log(windowHeight);
    var elementTop = reveals[i].getBoundingClientRect().top;
    console.log(elementTop);
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// Scroll to Top
const root = document.documentElement;
const button = document.querySelector("#backToTop");

function handleScroll() {
  const scrollTotal = root.scrollHeight - root.clientHeight;

  if (root.scrollTop / scrollTotal > 0.15) {
    button.classList.add("showScroll");
  } else {
    button.classList.remove("showScroll");
  }
}

function handleClick() {
  root.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button.addEventListener("click", handleClick);
document.addEventListener("scroll", handleScroll);
