import "./style.css"

function Rodape () {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const alturaJanela = window.innerHeight;
        const alturaTotal = document.documentElement.scrollHeight;

        // Verifica se o scroll chegou ao final
        if (scrollY + alturaJanela >= 1237) {
            $("footer.rodape").removeClass("d-none")
        } else {
            $("footer.rodape").addClass("d-none")
        }
    });
    
    return (
        <>
        <footer className="rodape d-none">
            <section>
                <article>
                    <div className="d-flex justify-content-center mt-1 gap-2">
                        <div className="borda-botao"><button className="reseta-botao"><i class="bi bi-arrow-left-short"></i></button></div>
                        <div className="borda-botao"><button className="reseta-botao"><i class="bi bi-arrow-right-short"></i></button></div>
                    </div>
                </article>
            </section>
        </footer>
        </>
    )
}

export default Rodape