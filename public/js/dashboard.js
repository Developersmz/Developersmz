document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.comand').forEach(command => {
        command.addEventListener('click', function(event) {
            event.preventDefault()
    
            // Remove a classe 'active' de todos os comandos
            document.querySelectorAll('.comand').forEach(cmd => cmd.classList.remove('active'))
    
            // Adiciona a classe 'active' ao comando clicado
            this.classList.add('active')
    
            // Esconde todas as seções da viewer
            document.querySelectorAll('.viewer > div').forEach(viewerSection => {
                viewerSection.classList.remove('active-viewer')
            })
    
            // Mostra a seção correspondente ao comando clicado
            const target = this.getAttribute('data-target')
            document.querySelector(`.${target}`).classList.add('active-viewer')
        })
    })

    const editbutton = document.querySelector("#edit-button")
    const closebutton = document.querySelector("#close-button")
    editbutton.onclick = () => {
        document.querySelector(".edit-admin").classList.add('active')
    }
    closebutton.onclick = () => {
        document.querySelector(".edit-admin").classList.remove('active')
    }
    
})