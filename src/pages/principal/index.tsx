import React from "react";
import { useTheme } from "../../app/components/context/context";
import Layout from "../../app/components/layout/layout";
import imgPrincipal from "../../app/img/img-principal-editada.jpg";

function Principal(): JSX.Element {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Layout>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 pb-12">
        <section className="mb-8">
          <article className="flex flex-col items-center">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center relative"
              style={{ backgroundImage: `url(${imgPrincipal})` }}
            >
              <div
                className={`absolute inset-0 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? "text-secondary" : "text-secondary"
                }`}
              ></div>
              <div className="relative z-10 text-center p-4">
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-300 ${
                    isDarkMode ? "text-secondary" : "text-secondary"
                  }`}
                >
                  Regras de um e-mail comercial
                </h1>
                <p
                  className={`mt-2 text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-white"
                  }`}
                >
                  Princípios essenciais para a sua comunicação corporativa.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="space-y-8">
          <article>
            <div
              className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="text-start">
                <h2
                  className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-secondary" : "text-primary"
                  }`}
                >
                  <span>Principais regras de um e-mail comercial</span>
                </h2>
                <p className="mb-3 text-sm sm:text-base">
                  Antes de fazer um email corporativo, é importante estabelecer
                  algumas regras para o seu uso. Afinal, esse produto carrega o
                  nome da empresa consigo.
                </p>
                <p className="mb-3 text-sm sm:text-base">
                  Em primeiro lugar, pense que se trata de um instrumento de trabalho.
                  Assim, assuntos que não se relacionam diretamente com o serviço devem
                  ser evitados.
                </p>
                <p className="mb-3 text-sm sm:text-base">Isso não significa que você deva manter uma imagem rígida da sua empresa.
                  É possível adotar um modelo de negócios com imagem descontraída, mas que
                  também se apresente de forma profissional.</p>
                <p className="mb-3 text-sm sm:text-base">Outra regra importante se relaciona ao uso de emails automáticos.
                  Lembre-se que cada mensagem se direciona a uma pessoa e não a um robô.</p>
                <p className="mb-3 text-sm sm:text-base">
                  Portanto, utilize mensagens personalizadas e que demonstrem excelência
                  no atendimento ao cliente. Com isso, as chances de retorno dos clientes
                  aumentam!
                </p>
              </div>
            </div>
          </article>
          <article>
            <div
              className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="text-start">
                <h2
                  className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-secondary" : "text-primary"
                  }`}
                >
                  <span>Resumo Geral</span>
                </h2>
                <div className="text-sm sm:text-base">
                  <p className="mb-2">Tenha como regra que um e-mail corporativo:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>É um instrumento de trabalho</li>
                    <li>Uma forma de fortalecer sua marca</li>
                    <li>As mensagens são feitas para pessoas, não robôs</li>
                    <li>Demonstra excelência no atendimento</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Principal;