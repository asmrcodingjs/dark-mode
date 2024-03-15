const darkBtn = document.getElementById("darkbtn")

const body = document.body

const isDarkMode = localStorage.getItem("darkMode") === "enabled"

if (isDarkMode) {
    document.querySelector(".slider.round").classList.add("dark-mode")
    body.classList.add("dark-mode")
    darkBtn.checked = true;
}

darkBtn.addEventListener("change", () => {
    if (darkBtn.checked) {
        body.classList.add("dark-mode")
        document.querySelector(".slider.round").classList.add("dark-mode")
        localStorage.setItem("darkMode","enabled")
    } else {
        document.querySelector(".slider.round").classList.remove("dark-mode");

        body.classList.remove("dark-mode")
        localStorage.setItem("darkMode","disabled")
        
    }
})