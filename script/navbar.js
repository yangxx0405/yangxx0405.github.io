document.addEventListener("DOMContentLoaded", function () {
    fetch("../component/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        highlightActiveNav();
      })
      .catch(error => console.error("Error loading navbar:", error));
  });

  // 自动高亮当前页面的导航项
  
  function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("#navbar-container .nav-link");
  
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentPath === linkPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  