document.addEventListener("DOMContentLoaded", () => {
    const dynamic_container = document.querySelector(".dynamic-container")
    const allButtons = document.querySelectorAll(".button")
    
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonID = button.id
            console.log(buttonID)
            createContent(buttonID)
        })
    })

    function createContent(buttonID){
        dynamic_container.innerHTML = ""
        // Creating Content
        if (buttonID == "add-home-fr"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add home phrase</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="home"></input>
                                <label for="home-tx">digite a frase do home</label>
                                <textarea id="home-tx" name="homePhrase"></textarea>
                            </div 
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-about-intro"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add about introduction</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="aboutInt"></input>
                                <label for="about-int">digite a introdução do about</label>
                                <textarea id="about-int" name="aboutIntro"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-about-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add about text</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="aboutText"></input>
                                <label for="about-tx">digite o texto do about</label>
                                <textarea id="about-tx" name="aboutText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-obj-intro"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add Objective introduction</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="objInt"></input>
                                <label for="obj-int">digite a introdução do object</label>
                                <textarea id="obj-int" name="objIntro"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-obj-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add Objective text</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="objText"></input>
                                <label for="obj-ph">digite o texto</label>
                                <textarea id="obj-ph" name="objText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-goal-intro"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add goal introduction</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="goalInt"></input>
                                <label for="goal-int">digite a introdução do goal</label>
                                <textarea id="goal-int" name="goalIntro"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-goal-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add goal text</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="goalText"></input>
                                <label for="goal-ph">digite o texto do goal</label>
                                <textarea id="goal-ph" name="goalText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-comp-intro"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add compromisse introduction</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="compInt"></input>
                                <label for="comp-ph">digite a introdução do compromisse</label>
                                <textarea id="comp-ph" name="comproIntro"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-comp-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add compromisse text</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="compText"></input>
                                <label for="comp-tx">digite o texto do compromisse</label>
                                <textarea id="comp-tx" name="comproText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>    
                    </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-skill"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add skill</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="addSkill"></input>
                                <label for="skill-tl">digite o título da skill ou kit</label>
                                <input type="text" id="skill-tl" name="skillTitle"></input>
                            </div>
                            <div class="input-group">
                                <label for="skill-tx">digite a importância</label>
                                <textarea id="skill-tx" name="skillText"></textarea>
                            </div>    
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-service-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add services text</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="service"></input>
                                <label for="service-tx">digite a frase do services</label>
                                <textarea id="service-tx" name="serviceText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-service"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add service</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="addService"></input>
                                <label for="serv-ic">icone do serviço</label>
                                <input type="text" id="serv-ic" name="serviceIcon"></input>
                            </div>
                            <div class="input-group">
                                <label for="serv-tl">título do serviço</label>
                                <input type="text" id="serv-tl" name="serviceTitle"></input>
                            </div>
                            <div class="input-group">
                                <label for="serv-tx">digite o texto</label>
                                <textarea id="serv-tx" name="serviceText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-project-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add projects phrase</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="projText"></input>
                                <label for="proj-tx">digite a frase do projects</label>
                                <textarea id="proj-tx" name="projectsText"></textarea>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-project"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add project</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="project"></input>
                                <label for="proj-tl">título do projeto</label>
                                <input type="text" id="proj-tl" name="projectTitle"></input>
                            </div>
                            <div class="input-group">
                                <label for="proj-sk">ferramentas usadas</label>
                                <input type="text" id="proj-sk" name="projectSkills"></input>
                            </div>
                            <div class="input-group">
                                <label for="proj-ct">tipo ou categoria</label>
                                <input type="text" id="proj-ct" name="projectType"></input>
                            </div>
                            <div class="input-group">
                                <label for="proj-scr">link do projeto</label>
                                <input type="text" id="proj-scr" name="projectLink"></input>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            <div>        
                        </form>
                    </div>
                </div>
            </div>

            `
        } else if (buttonID == "add-testimony-text"){
            dynamic_container.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Add testimonials phrase</h2>
                    </div>
                    <div class="form">
                        <form method="post" action="/dashboard/action">
                            <div class="input-group">
                                <input type="hidden" name="hidden" value="testText"></input>
                                <label for="test-tx">digite a frase do testimonial</label>
                                <textarea id="test-tx" name="testText"></textarea>
                            </div>
                            <div class="input-group">    
                                <button type="submit" class="button">salvar frase</button>
                                <button type="button" class="go-back-btn">cancelar e voltar</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>

            `
        } else {
            console.log("unknown id")
        }

        const goBackBtn = document.querySelectorAll(".go-back-btn")
        goBackBtn.forEach(button => {
            button.addEventListener("click", () => {
                window.location.reload()
            })
        })

    }
})
