import React from "react";
import { useTheme } from "../../app/components/context/context";
import Layout from "../../app/components/layout/layout";
import imgInicio from "../../app/img/img-inicio-editada.jpg";

function Inicio(): JSX.Element {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <Layout>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 pb-12">
        <section className="mb-8">
          <article className="flex flex-col items-center">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center relative"
              style={{ backgroundImage: `url(${imgInicio})` }}
            >
              <div
                className={`absolute inset-0 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? "" : ""
                }`}
              ></div>
              <div className="relative z-10 text-center p-4">
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-300 ${
                    isDarkMode ? "text-secondary" : "text-secondary"
                  }`}
                >
                  Conta de E-mail Profissional
                </h1>
                <p
                  className={`mt-2 text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-white"
                  }`}
                >
                  Como configurar sua conta de e-mail corporativo de forma
                  simples e rápida.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article>
            <div
              className={`border rounded-lg shadow-lg p-6 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="w-full lg:w-1/2">
                  <iframe
                    className="rounded-lg w-full h-80 lg:h-96"
                    src="https://www.youtube.com/embed/5ci7qMojsKM"
                    title="Video sobre o e-mail comercial"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                  <h2
                    className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isDarkMode ? "text-secondary" : "text-primary"
                    }`}
                  >
                    <span>Introdução</span>
                  </h2>
                  <p className="mb-3 text-sm sm:text-base">
                    Um e-mail comercial ou e-mail corporativo é um endereço
                    eletrônico que utiliza o domínio próprio de uma empresa (ex:
                    @nomedaempresa.com.br), em vez de domínios gratuitos como
                    @gmail.com, @hotmail.com e etc.
                  </p>
                  <p className="mb-3 text-sm sm:text-base">
                    Esse tipo de e-mail fortalece a identidade da marca, permite
                    a organização por departamentos, oferece mais segurança com
                    antivírus e filtros de spam, e pode integrar funcionalidades
                    como calendário e gestão de tarefas.
                  </p>
                  <p className="mb-3 text-sm sm:text-base">
                    Serve para comunicação interna e externa, transmitindo
                    profissionalismo, reforçando a identidade da marca e
                    oferecendo maior controle e segurança das informações da
                    empresa.
                  </p>
                  <p className="text-sm sm:text-base">
                    Para entender de forma simples e prática o que é um e-mail
                    comercial (ou e-mail corporativo), assista ao vídeo a
                    seguir. Ele vai te ajudar a visualizar melhor como funciona
                    esse tipo de e-mail.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Inicio;