import React, { useState } from "react";
import { useTheme } from "../../app/components/context/context";
import Layout from "../../app/components/layout/layout";
import imgRegras from "../../app/img/img-regras-editada.jpg";

const CollapsePanel: React.FC<{
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, content, isOpen, onClick }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`rounded-lg shadow-sm overflow-hidden mb-3 transition-colors duration-300 ${
        isDarkMode ? "text-secondary" : "text-secondary"
      }`}
    >
      <button
        onClick={onClick}
        className={`w-full text-left py-4 px-6 transition-colors duration-200 ease-in-out font-medium focus:outline-none ${
          isDarkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
      >
        {title}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 p-6" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <p className="text-sm sm:text-base">{content}</p>
      </div>
    </div>
  );
};

function Regras(): JSX.Element {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const handlePanelClick = (panelTitle: string) => {
    setOpenPanel(openPanel === panelTitle ? null : panelTitle);
  };

  return (
    <Layout>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 pb-12">
        <section className="mb-8">
          <article className="flex flex-col items-center">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center relative"
              style={{ backgroundImage: `url(${imgRegras})` }}
            >
              <div
                className={`absolute inset-0 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? "" : " "
                }`}
              ></div>
              <div className="relative z-10 text-center p-4">
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-300 ${
                   isDarkMode ? "text-secondary" : "text-secondary"
                  }`}
                >
                  Diferenças entre e-mail pessoal e e-mail comercial
                </h1>
                <p
                  className={`mt-2 text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-white"
                  }`}
                >
                  Como usar a conta de e-mail corporativo de forma estratégica e
                  profissional.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article>
            <div
              className={`rounded-lg shadow-lg p-6 mb-8 transition-colors duration-300 ${
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
                  <span>Principais diferenças entre e-mail pessoal e e-mail comercial</span>
                </h2>
                <p className="text-sm sm:text-base">
                  Como você viu até aqui, existem algumas regras para o uso do e-mail
                  profissional. Além disso, é interessante frisar as diferenças entre
                  um e-mail profissional e um e-mail pessoal. Na sequência você confere
                  quais são elas.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <CollapsePanel
                title="Endereço de e-mail"
                content="O endereço de e-mail pessoal geralmente contém o seu nome do usuário ou algum apelido (por exemplo, seuapelido@gmail.com), enquanto um endereço de e-mail profissional tende a incluir o nome da sua empresa ou organização seguido do nome do usuário (por exemplo, nome.sobrenome@empresa.com)."
                isOpen={openPanel === "Endereço de e-mail"}
                onClick={() => handlePanelClick("Endereço de e-mail")}
              />
              <CollapsePanel
                title="Segurança de dados"
                content="Um e-mail pessoal, geralmente está hospedado em um serviço gratuito de e-mails, diferente de um e-mail profissional, onde você paga um provedor para manter os e-mails do seu negócio. Nesse caso, a segurança é redobrada, pois existe um contrato de prestação de serviço. No mais, backup das mensagens comumente é garantido, facilitando a recuperação de mensagens perdidas."
                isOpen={openPanel === "Segurança de dados"}
                onClick={() => handlePanelClick("Segurança de dados")}
              />
              <CollapsePanel
                title="Custos"
                content="Um e-mail pessoal pode ser mantido em um provedor gratuito, enquanto um e-mail profissional vai ser mantido em um provedor pago. Nesse caso, os e-mails vão estar incluídos em um ou mais planos, os quais vão dispor de determinados recursos."
                isOpen={openPanel === "Custos"}
                onClick={() => handlePanelClick("Custos")}
              />
              <CollapsePanel
                title="Armazenamento"
                content="Os provedores de e-mail profissional costumam oferecer planos com uma grande quantidade de GB para armazenamento. Isso significa que, diferentemente do que acontece em um e-mail pessoal, no e-mail empresarial você vai poder um espaço personalizado para suas mensagens."
                isOpen={openPanel === "Armazenamento"}
                onClick={() => handlePanelClick("Armazenamento")}
              />
              <CollapsePanel
                title="Suporte"
                content="Outro ponto muito distante entre os dois tipos de e-mail, é o fato de provedores pagos disporem de times de suporte em diferentes canais. Ou seja, em caso de problemas, você consegue contatar uma pessoa que vai te auxiliar na solução."
                isOpen={openPanel === "Suporte"}
                onClick={() => handlePanelClick("Suporte")}
              />
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Regras;
