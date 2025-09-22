import "./style.css"
import imgInicio from "/imagens/img-inicio-editada.jpg"

function Inicio () {
    $("body").addClass("tema-claro")
    $("#root").css(
        {
            "margin": "0px",
            "padding": "0px",
            "max-width": "100vw"

        })
    return (
        <>
        <main className="tema-claro">
            <section>
                <article>
                    <div>
                        <div>
                            <img id="imagem-inicial" src={imgInicio} alt="" />
                        </div>
                        <div>
                            <h1>Conta de E-mail Profissional - Como configurar sua conta </h1>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <div className="borda-personalizada rounded margem-div-info mt-3">
                        <div className="text-start">
                            <h2 className="m-3">
                                <strong>
                                    <span>Introdução</span>
                                </strong>
                            </h2>
                                <p className="m-3">Um e-mail comercial ou e-mail corporativo, é um endereço
                                    eletrónico que utiliza o domínio próprio de uma empresa
                                    (ex: @nomedaempresa.com.br), em vez de domínios gratuitos como @gmail.com, @hotmail.com e etc.
                                </p>
                                <p className="m-3">
                                    Esse tipo de e-mail fortalece a identidade da marca, permite a 
                                    organização por departamentos, oferece mais segurança com antivírus e 
                                    filtros de spam, e pode integrar funcionalidades como calendário e 
                                    gestão de tarefas.
                                </p>
                                <p className="m-3">Serve para comunicação interna e externa, transmitindo
                                    profissionalismo, reforçando a identidade da marca e
                                    oferecendo maior controle e segurança das informações da empresa.</p>
                                
                                <p className="m-3">Para entender de forma simples e prática o que é um e-mail comercial (ou e-mail corporativo),
                                    assista ao vídeo a seguir. Ele vai te ajudar a visualizar melhor como funciona esse tipo de e-mail</p>
                        </div>
                        <div>
                            <iframe className="rounded video" src="https://www.youtube.com/embed/5ci7qMojsKM" title="Video sobre o e-mail comercial" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </article>
            </section>
            
        </main></>
    )
}

export default Inicio