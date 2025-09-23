import React, { useState, useEffect } from "react";
import { useTheme } from "../../app/components/context/context";
import Layout from "../../app/components/layout/layout";
import imgDesafio from "../../app/img/img-desafio-editada.jpg";
import { GiPodiumWinner } from "react-icons/gi";

const quizData = [
  {
    id: 1,
    question: "O e-mail comercial e o e-mail corporativo são endereços eletrônicos?",
    type: "true-false",
    correctAnswer: "true",
    feedback: "O e-mail comercial e corporativo são a mesma coisa, endereços eletrônicos de domínio pago, em nome da empresa.",
  },
  {
    id: 2,
    question: "O domínio (@empresa.com.br) é a parte do e-mail que identifica a organização?",
    type: "true-false",
    correctAnswer: "true",
    feedback: "Sim, o domínio é a identificação da empresa no endereço de e-mail, transmitindo profissionalismo e credibilidade.",
  },
  {
    id: 3,
    question: "A principal diferença entre e-mail pessoal e comercial é o seu domínio de hospedagem?",
    type: "true-false",
    correctAnswer: "true",
    feedback: "Correto. O e-mail profissional é hospedado em um provedor pago, garantindo mais recursos e segurança, enquanto o e-mail pessoal geralmente é de um serviço gratuito.",
  },
  {
    id: 4,
    question: "Qual das opções abaixo representa uma boa prática no uso de e-mails corporativos?",
    type: "single-choice",
    options: [
      "Usar apelidos e gírias no endereço de e-mail",
      "Enviar mensagens genéricas e automáticas para todos os clientes",
      "Separar o conteúdo profissional do pessoal, mantendo o tom alinhado com a imagem da empresa",
      "Usar e-mail pessoal para assuntos da empresa, desde que seja mais prático",
    ],
    correctAnswer: "Separar o conteúdo profissional do pessoal, mantendo o tom alinhado com a imagem da empresa",
    feedback: "Manter o conteúdo profissional e o pessoal separados e alinhar o tom à imagem da empresa são boas práticas essenciais.",
  },
  {
    id: 5,
    question: "Complete a frase: Um e-mail corporativo deve ser visto como __________.",
    type: "single-choice",
    options: [
      "uma forma informal de se comunicar com amigos",
      "uma ferramenta exclusiva para marketing digital",
      "um instrumento de trabalho e fortalecimento da marca",
      "um espaço para mensagens pessoais e descontraídas",
    ],
    correctAnswer: "um instrumento de trabalho e fortalecimento da marca",
    feedback: "O e-mail corporativo é uma ferramenta de trabalho que fortalece a marca e a identidade da empresa.",
  },
  {
    id: 6,
    question: "Quais são as vantagens de um e-mail profissional em relação a um pessoal? (Selecione todas as opções corretas)",
    type: "multiple-choice",
    options: [
      "Reforça a identidade da marca",
      "Melhora a segurança",
      "Garante mais espaço de armazenamento",
      "Permite usar o nome da empresa no endereço",
    ],
    correctAnswer: [
      "Reforça a identidade da marca",
      "Melhora a segurança",
      "Garante mais espaço de armazenamento",
      "Permite usar o nome da empresa no endereço",
    ],
    feedback: "Todas as opções estão corretas. O e-mail profissional oferece diversas vantagens, como credibilidade, segurança e recursos avançados.",
  },
  {
    id: 7,
    question: "Quais elementos são essenciais em um e-mail profissional?",
    type: "multiple-choice",
    options: [
      "Uso de emojis na linha de assunto",
      "Assinatura com nome e cargo",
      "Uso de gírias e apelidos",
      "Assunto claro e conciso",
      "Tom formal e respeitoso",
    ],
    correctAnswer: [
      "Assinatura com nome e cargo",
      "Assunto claro e conciso",
      "Tom formal e respeitoso",
    ],
    feedback: "Assinatura, assunto claro e um tom profissional são cruciais para a comunicação corporativa.",
  },
  {
    id: 8,
    question: "Marque as opções que representam uma boa prática ao redigir um e-mail profissional. (Selecione todas as opções corretas)",
    type: "multiple-choice-button",
    options: [
      "Revisar a gramática e a ortografia",
      "Usar uma saudação e uma despedida adequadas",
      "Ajustar o tom da mensagem de acordo com o destinatário",
      "Evitar o uso de emoticons e abreviações informais",
    ],
    correctAnswer: [
      "Revisar a gramática e a ortografia",
      "Usar uma saudação e uma despedida adequadas",
      "Ajustar o tom da mensagem de acordo com o destinatário",
      "Evitar o uso de emoticons e abreviações informais",
    ],
    feedback: "Todas as opções são boas práticas para garantir uma comunicação profissional e eficaz.",
  },
];

function Desafio(): JSX.Element {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [feedback, setFeedback] = useState<Record<number, boolean>>({});
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [trophyColor, setTrophyColor] = useState<string>("");

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    const savedAttempts = localStorage.getItem('quizAttempts');
    const savedFeedback = localStorage.getItem('quizFeedback');
    const savedFinalScore = localStorage.getItem('finalScore');
    const savedTrophyColor = localStorage.getItem('trophyColor');
    
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedAttempts) setAttempts(JSON.parse(savedAttempts));
    if (savedFeedback) setFeedback(JSON.parse(savedFeedback));
    if (savedFinalScore) setFinalScore(parseInt(savedFinalScore, 10));
    if (savedTrophyColor) setTrophyColor(savedTrophyColor);

  }, []);

  useEffect(() => {
    const allQuestionsAnswered = Object.keys(feedback).length === quizData.length;
    if (allQuestionsAnswered) {
      const correctCount = Object.values(feedback).filter(Boolean).length;
      const totalQuestions = quizData.length;
      let color = "";

      if (correctCount === totalQuestions) {
        color = "#FFD700"; 
      } else if (correctCount > totalQuestions / 2) {
        color = "#C0C0C0"; 
      } else {
        color = "#CD7F32"; 
      }

      setFinalScore(correctCount);
      setTrophyColor(color);
      setShowFinalModal(true);

      localStorage.setItem('finalScore', correctCount.toString());
      localStorage.setItem('trophyColor', color);
    }
  }, [feedback]);


  const saveQuizState = (
    currentAnswers: Record<number, string | string[]>,
    currentAttempts: Record<number, number>,
    currentFeedback: Record<number, boolean>
  ) => {
    localStorage.setItem('quizAnswers', JSON.stringify(currentAnswers));
    localStorage.setItem('quizAttempts', JSON.stringify(currentAttempts));
    localStorage.setItem('quizFeedback', JSON.stringify(currentFeedback));
  };

  
  const isCorrect = (question: typeof quizData[0], userAnswer: string | string[]): boolean => {
    if (question.type === "true-false" || question.type === "single-choice") {
      return userAnswer === question.correctAnswer;
    } else if (question.type === "multiple-choice" || question.type === "multiple-choice-button") {
      const sortedUserAnswers = (userAnswer as string[] || []).sort();
      const sortedCorrectAnswers = (question.correctAnswer as string[]).sort();
      return JSON.stringify(sortedUserAnswers) === JSON.stringify(sortedCorrectAnswers);
    }
    return false;
  };

  
  const handleSingleAnswerChange = (question: typeof quizData[0], answer: string) => {
    const newAnswers = { ...answers, [question.id]: answer };
    const newAttempts = { ...attempts, [question.id]: (attempts[question.id] || 0) + 1 };
    
    setAnswers(newAnswers);
    setAttempts(newAttempts);

    if (newAttempts[question.id] === 2 || isCorrect(question, answer) || question.type === "true-false") {
      const isAnswerCorrect = isCorrect(question, answer);
      const newFeedback = { ...feedback, [question.id]: isAnswerCorrect };
      setFeedback(newFeedback);
      saveQuizState(newAnswers, newAttempts, newFeedback);
    } else {
      saveQuizState(newAnswers, newAttempts, feedback);
    }
  };

  const handleMultipleChoice = (question: typeof quizData[0], option: string) => {
    const currentAnswers = (answers[question.id] || []) as string[];
    const newAnswersForQuestion = currentAnswers.includes(option)
      ? currentAnswers.filter((a) => a !== option)
      : [...currentAnswers, option];

    const newAnswers = { ...answers, [question.id]: newAnswersForQuestion };
    const newAttempts = { ...attempts, [question.id]: (attempts[question.id] || 0) + 1 };
    
    setAnswers(newAnswers);
    setAttempts(newAttempts);

    if (newAttempts[question.id] === 2 || isCorrect(question, newAnswersForQuestion)) {
      const isAnswerCorrect = isCorrect(question, newAnswersForQuestion);
      const newFeedback = { ...feedback, [question.id]: isAnswerCorrect };
      setFeedback(newFeedback);
      saveQuizState(newAnswers, newAttempts, newFeedback);
    } else {
      saveQuizState(newAnswers, newAttempts, feedback);
    }
  };

  const handleMultipleChoiceCheckbox = (question: typeof quizData[0], option: string) => {
    const currentAnswers = (answers[question.id] || []) as string[];
    const newAnswersForQuestion = currentAnswers.includes(option)
      ? currentAnswers.filter((a) => a !== option)
      : [...currentAnswers, option];

    const newAnswers = { ...answers, [question.id]: newAnswersForQuestion };
    setAnswers(newAnswers);
  };
   
  const checkMultipleChoice = (question: typeof quizData[0]) => {
    const newAnswers = { ...answers };
    const newAttempts = { ...attempts, [question.id]: (attempts[question.id] || 0) + 1 };

    setAttempts(newAttempts);

    if (newAttempts[question.id] === 2 || isCorrect(question, newAnswers[question.id] || [])) {
      const isAnswerCorrect = isCorrect(question, newAnswers[question.id] || []);
      const newFeedback = { ...feedback, [question.id]: isAnswerCorrect };
      setFeedback(newFeedback);
      saveQuizState(newAnswers, newAttempts, newFeedback);
    } else {
      saveQuizState(newAnswers, newAttempts, feedback);
    }
  };

  const handleCloseModal = () => {
    setShowFinalModal(false);
  };
  
  return (
    <Layout>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 pb-12">
        <section className="mb-8">
          <article className="flex flex-col items-center">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center relative"
              style={{ backgroundImage: `url(${imgDesafio})` }}
            >
              <div
                className={`absolute inset-0 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? "bg-gray-900 opacity-30" : "bg-white text-black"
                }`}
              ></div>
              <div className="relative z-10 text-center p-4">
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-300 ${
                    isDarkMode ? "text-secondary" : "text-secondary"
                  }`}
                >
                  Valide Seu Conhecimento
                </h1>
                <p
                  className={`mt-2 text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                    isDarkMode ? "" : ""
                  }`}
                >
                  Responda o questionário e finalize o curso.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold   dark:text-gray-200 mb-6">Questionário</h2>
          {quizData.map((question) => {
            const isAttempted = feedback[question.id] !== undefined;
            const remainingAttempts = question.type === "true-false" ? 1 : 2 - (attempts[question.id] || 0);
            const showAttempts = !isAttempted && (question.type !== "true-false");
            const isCorrectAnswer = isCorrect(question, answers[question.id] || []);

            return (
              <div key={question.id} className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800 " : "bg-white text-gray-800"
              }`}>
                <p className="font-semibold text-lg mb-4">
                  <strong>{question.id}.</strong> {question.question}
                </p>
                
                {showAttempts && (
                  <p className="text-sm text-gray-500 mb-4">
                    Tentativas restantes: <span className="font-bold">{remainingAttempts}</span>
                  </p>
                )}

                {question.type === "true-false" && (
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      className={`flex-1 p-4 rounded-lg font-medium transition-colors ${
                        answers[question.id] === "true" ? "bg-emerald-500 " : "bg-gray-200 text-gray-800 hover:bg-emerald-500 hover:text-white"
                      }`}
                      onClick={() => handleSingleAnswerChange(question, "true")}
                      disabled={isAttempted}
                    >
                      Verdadeiro
                    </button>
                    <button
                      className={`flex-1 p-4 rounded-lg font-medium transition-colors ${
                        answers[question.id] === "false" ? "bg-rose-500 " : "bg-gray-200 text-gray-800 hover:bg-rose-500 hover:text-white"
                      }`}
                      onClick={() => handleSingleAnswerChange(question, "false")}
                      disabled={isAttempted}
                    >
                      Falso
                    </button>
                  </div>
                )}
                {(question.type === "single-choice") && (
                  <div className="space-y-3">
                    {question.options?.map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          answers[question.id] === option ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300 hover:bg-gray-50 text-black"
                        } ${isAttempted ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handleSingleAnswerChange(question, option)}
                        tabIndex={isAttempted ? -1 : 0}
                      >
                        <p className="font-medium">
                          <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {(question.type === "multiple-choice") && (
                  <div className="space-y-3">
                    {question.options?.map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          (answers[question.id] as string[] || []).includes(option) ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300 hover:bg-gray-50 text-black"
                        } ${isAttempted ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handleMultipleChoice(question, option)}
                        tabIndex={isAttempted ? -1 : 0}
                      >
                        <p className="font-medium">
                          <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {(question.type === "multiple-choice-button") && (
                  <div className="space-y-3">
                    {question.options?.map((option, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={`q${question.id}-opt-${index}`}
                          checked={(answers[question.id] as string[] || []).includes(option)}
                          onChange={() => handleMultipleChoiceCheckbox(question, option)}
                          disabled={isAttempted}
                          className="form-checkbox h-5 w-5 text-blue-600 rounded"
                        />
                        <label htmlFor={`q${question.id}-opt-${index}`} className="text-gray-700 dark:text-gray-300 flex-1 cursor-pointer">
                          {option}
                        </label>
                      </div>
                    ))}
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={() => checkMultipleChoice(question)}
                        disabled={isAttempted}
                        className="bg-blue-500 hover:bg-blue-600  font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Verificar Resposta
                      </button>
                    </div>
                  </div>
                )}

                {isAttempted && (
                  <div className={`mt-4 p-4 rounded-lg  font-semibold ${
                    isCorrectAnswer
                      ? 'bg-emerald-500'
                      : 'bg-rose-500'
                  }`}>
                    <p>
                      {isCorrectAnswer
                        ? "Resposta correta!" : "Resposta incorreta."}
                    </p>
                    <p className="text-sm mt-1">{question.feedback}</p>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>
      
      {showFinalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-xl shadow-2xl p-6 text-center max-w-md w-full animate-fade-in transition-colors duration-300 ${isDarkMode ? "bg-gray-800 " : "bg-white text-gray-800"}`}>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              onClick={handleCloseModal}
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center items-center mb-4">
              <GiPodiumWinner className="w-24 h-24" style={{ color: trophyColor }} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Parabéns por ter estudado conosco!
            </h3>
            <p className="text-lg mb-4">
              Você concluiu o questionário.
            </p>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-xl font-bold">
                Sua Pontuação Final:
              </p>
              <p className="text-5xl font-extrabold mt-2" style={{ color: trophyColor }}>
                {finalScore}/{quizData.length}
              </p>
            </div>
          </div>
        </div>
      )}
      
    </Layout>
  );
}

export default Desafio;
