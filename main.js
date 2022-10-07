const changeThemeBtn = document.getElementById("change-theme")

changeThemeBtn.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})