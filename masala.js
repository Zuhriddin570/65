// Parolni ko‘rsatish uchun
document.querySelectorAll('.password-group i').forEach(icon => {
  icon.addEventListener('click', function() {
      let input = this.previousElementSibling;
      if (input.type === "password") {
          input.type = "text";
          this.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
          input.type = "password";
          this.classList.replace('fa-eye-slash', 'fa-eye');
      }
  });
});

// Profil progress indikatorini yangilash
function setProgress(percent) {
  let circle = document.getElementById("progress-bar");
  let text = document.getElementById("progress-text");
  let circumference = 314; // 2 * PI * R
  let offset = circumference - (percent / 100) * circumference;
  
  circle.style.transition = "stroke-dashoffset 1s ease-in-out";
  circle.style.strokeDashoffset = offset;
  text.textContent = percent + "%";
}

// 65% progressni o‘rnatish
setProgress(65);
