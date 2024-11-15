window.addEventListener("load", function(){
    // App Loader
    document.querySelector(".app-loader").classList.add("fade-out")
    setTimeout(() => {
        document.querySelector(".app-loader").style.display="none"
    }, 600)
})

document.addEventListener("DOMContentLoaded", () => {

    const lightBtn = document.getElementById("light")
    const darkBtn = document.getElementById("dark")

    function applyTheme(theme){
        document.body.className = theme
        localStorage.setItem('theme', theme)

        if (theme === 'light'){
            lightBtn.classList.add('active')
            darkBtn.classList.remove('active')
        } else {
            lightBtn.classList.remove('active')
            darkBtn.classList.add('active')
        }
    }

    lightBtn.addEventListener("click", () => applyTheme('light'))
    darkBtn.addEventListener("click", () => applyTheme('dark'))

    // Load theme saved
    const savedTheme = localStorage.getItem('theme') || 'light'
    applyTheme(savedTheme)

    // Menu navbar
    const menuBar = document.querySelector(".menu-shower")
    menuBar.addEventListener("click", toggleMenu)

    function toggleMenu(){
        menuBar.classList.toggle("active")
        document.querySelector(".nav").classList.toggle("open")
    }

    // Close menu when clicking a nav item
    document.addEventListener("click", function(e){
        if(e.target.closest(".menu-item")){
            toggleMenu()
        }
    })

    // Stick header
    window.addEventListener("scroll", () => {
        if(this.scrollY > 60) {
            document.querySelector(".header").classList.add("sticky")
        } else {
            document.querySelector(".header").classList.remove("sticky")
        }
    })

    // Show Settings opts
    const settsBtn = document.querySelector("#setts-btn")
    const settsOpts = document.querySelector(".config-opts")
    const closeSetts = document.querySelector("#close-btn")
    settsBtn.addEventListener("click", () => {
        settsOpts.style.display = "block"
    })

    closeSetts.addEventListener("click", () => {
        settsOpts.style.display = "none"
    })
    
    // Show more about content
    const moreAboutBtn = document.querySelectorAll(".about-button a")
    moreAboutBtn.forEach((button) => {
        button.addEventListener("click", (event) => {
            const parentDiv = event.target.closest(".about-item")
            parentDiv.classList.toggle('showed')

            if (parentDiv.classList.contains('showed')) {
				button.textContent = 'Ver menos';
			} else {
				button.textContent = 'Ver mais';
			}

        })
    })

    // add new testimony
    const addTest = document.querySelector("#add-new-test")
    const closeSec = document.querySelector("#close-sec")

    addTest.onclick = () => {
        document.querySelector(".new-test").style.display="grid"
    }
    closeSec.onclick = () => {
        document.querySelector(".new-test").style.display="none"
    }

})