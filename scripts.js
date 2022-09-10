const darkTheme = document.getElementById("dark")
const darkThemeSwitch = document.getElementById("switch")
const label = document.querySelector(".label")


// inseri ou remove do elemento html as classes dark-theme e dark-switch 
const toggleTheme = () => {
    darkTheme.classList.toggle("dark-theme")
    darkThemeSwitch.classList.toggle("dark-switch")
}

//se ocorrer algum evento de click executa a função toggleTheme
label.addEventListener("click", toggleTheme)
darkThemeSwitch.addEventListener("click", toggleTheme)

