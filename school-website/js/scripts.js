
  // Disable Right Click
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

  // Disable Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, and F12
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
      event.preventDefault();
    }
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C"))) {
      event.preventDefault();
    }
  });

  // Detect DevTools Open and Redirect
  setInterval(function () {
    if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
      document.body.innerHTML = "DevTools Detected. Access Denied!";
    }
  }, 1000);

