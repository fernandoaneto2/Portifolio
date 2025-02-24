import React from "react";

import { ContactModal } from "./components/ContactModal";
import { IdiomsCard } from "./components/IdiomsCard";
import { FastActionButton } from "./components/FastActionButton";
import { TechsCards } from "./components/TechsCards";
import { ProjectsCards } from "./components/ProjectsCards";

import "./App.css";

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleFABClick = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ContactModal visible={modalVisible} setVisible={setModalVisible} />
      <FastActionButton handleOnClick={handleFABClick} />
      <div className="card">
        {/* <img src="imagem de perfil"> */}
        <h1>Sobre mim</h1>
        <p>
          Desenvolvedor Web Fullstack. .
        </p>
        <p>
          Sou comprometido com minhas tarefas, sei trabalhar em equipe e adoro
          novos desafios e não gosto de ficar ocioso. Estou sempre lendo,
          assistindo e praticando algo da minha área.
        </p>
      </div>
      <div className="card">
        <TechsCards />
      </div>
      <div className="card">
        <ProjectsCards />
        {/* <ul> */}
        {/* <li style={{ textAlign: "start" }}>
              Fenix Portal {"(Portal Web)"}
              <p>
                <strong>Paritcipação: </strong>Ingressei no projeto já em
                andamento, realizando melhorias, ajustes e uma integração com a
                API da plataforma de contabildiade QuickBooks com
                desenvolvedores Plenos e Juniores.
              </p>
              <p>
                <strong>Descrição:</strong> Portal Web para a empresa{" "}
                <strong>Fenix Group of Companies </strong>onde é possível
                controlar seus projetos, salários de funcionários e agendamento
                de trabalhos.
              </p>
              <h5>Tecnologias</h5>
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>ReactJS</li>
                    <li>CoreUI ReactJS {"(template)"}</li>
                    <li>AWS Cognito</li>
                    <li>AWS Amplify</li>
                  </ul>
                </li>
                <li>
                  Backend
                  <ul>
                    <li>Typescript</li>
                    <li>AWS Lambda</li>
                    <li>Serverless Framework</li>
                    <li>QuickBooks API</li>
                  </ul>
                </li>
                <li>
                  Banco de Dados
                  <ul>
                    <li>MySQL</li>
                    <li>DBeaver</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li style={{ textAlign: "start" }}>
              Fenix Construction {"(App Mobile)"}
              <p>
                <strong>Participação:</strong> Único participante do projeto,
                sendo o primeiro desenvolvimento mobile, realizando builds,
                deploys do Frontend e Backend e publicação dos app nas lojas:
                Play Store e App Store.
              </p>
              <p>
                <strong>Descrição:</strong> Aplicativo para funcionários de
                campo, possibilitando a verificação de seus trabalhos agendados,
                cartão de ponto, horas tralhadas e salário.
              </p>
              <p>
                O Aplicativo é totalmente integrado com o portal, com isso, a
                equipe Fenix pode agendar novos trabalhos para seus
                funcionários. Os usuário por sua vez podem "bater seus pontos"
                tirando uma foto somente se estiverem a pelo menos 10KM do local
                de trabalho.
              </p>
              <p>
                Também é possível visualizar o total de horas realizadas dentro
                da quinzena e do fim do mês.
              </p>
              <h5>Tecnologias</h5>
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>React Native</li>
                    <li>JavaScript</li>
                    <li>Styled-Components</li>
                  </ul>
                </li>
                <li>
                  Backend
                  <ul>
                    <li>TypeScript</li>
                    <li>AWS Lambdas</li>
                    <li>Serverless Framework</li>
                  </ul>
                </li>
                <li>
                  Banco de Dados
                  <ul>
                    <li>MySQL</li>
                    <li>TypeORM</li>
                  </ul>
                </li>
                <li>
                  Serviços de Nuvem
                  <ul>
                    <li>AWS S3</li>
                    <li>AWS Lambdas</li>
                    <li>AWS Cognito</li>
                  </ul>
                </li>
                <li>
                  Ferramentas
                  <ul>
                    <li>DBeaver</li>
                    <li>GitHub Actions</li>
                    <li>Expo SDK 48</li>
                    <li>EAS</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>OBS:</strong> Disponível para Android e iOS.
              </p>
            </li> */}
        {/* <li style={{ textAlign: "start" }}>
              Telemedicina {"E-saúde"} {"(App Mobile)"}
              <p>
                <strong>Participação:</strong> Único participante do projeto.
              </p>
              <p>
                <strong>Descrição:</strong> Aplicativo WebView voltado para a
                área médica com acesso ao portal Médico Online para agendamento
                e consultas online.
              </p>
              <h5>Tecnlogias</h5>
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>React Native</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li style={{ textAlign: "start" }}>
              Kondzilla {"(Backend)"}
              <p>
                <strong>Participação:</strong> Atuei no projeto com um
                desenvolvedor BI e com um Adm de Banco de Dados. Fiquei
                responsável pelo Backend e de um formulário para envio de
                arquivos.
              </p>
              <p>
                <strong>Descrição:</strong> Foi necessário criar Lambdas
                Agendadas para se comunicarem com as APIs das plataformas usadas
                pelo cliente para que seus dados fossem salvos em um banco na
                AWS. Para poder salvar os arquivos enviados pelo cliente foi
                criado um formulário que aceitava Excel e CSV além de ter sido
                necessário a criação de alguns algoritmos para finalizar as
                conversão dos arquivos para JSON.
              </p>
              <h5>Tecnologias</h5>
              <ul>
                <li>
                  Backend
                  <ul>
                    <li>TypeScript</li>
                    <li>AWS Scheduled Lambdas</li>
                    <li>AWS S3 Lambdas</li>
                    <li>Serverless Framework</li>
                  </ul>
                </li>
                <li>
                  Banco de Dados
                  <ul>
                    <li>MySQL</li>
                    <li>TypeORM</li>
                  </ul>
                </li>
                <li>
                  Serviços de Nuvem
                  <ul>
                    <li>AWS Amplify</li>
                    <li>AWS S3</li>
                    <li>AWS Lambdas</li>
                    <li>AWS Cognito</li>
                  </ul>
                </li>
                <li>
                  Ferramentas
                  <ul>
                    <li>DBeaver</li>
                    <li>GitHub Actions</li>
                  </ul>
                </li>
              </ul>
            </li> */}
        {/* </ul> */}

        <section>
          {/* <ul>
            <li style={{ textAlign: "start" }}>LATAM</li>
            <ul>
              <li style={{ textAlign: "start" }}>
                Projeto onde pude aprender <strong>SAP CPI</strong> durante o
                desenvolvimento de um projeto para a LATAM.
                <p>
                  Trabalhei em uma equipe de Chilenos. Tive que participar de
                  reuniões onde foi necessário falar em Espanhol e Inglês.{" "}
                </p>
                <br />
                <p>
                  Foi necessário criar vários fluxos no CPI para realizar a
                  integração entre 2 plataformas onde a empresa cliente realiza
                  a compra de peças de suas aeronaves.
                </p>
              </li>
            </ul>
            <li style={{ textAlign: "start" }}>Vale</li>
            <ul>
              <li style={{ textAlign: "start" }}>
                Projeto onde pude aprender <strong>Fiori UI5</strong> durante
                desenvolvimento do projeto.
              </li>
              <p>
                Participei em desenvolvimentos de diversos <strong>GAPs</strong>{" "}
                do projeto inicial. Sigo com o desenvolvimento atualmente com
                auxílio de outro desenvolvedor Fiori
              </p>
            </ul>
          </ul> */}
        </section>
      </div>
      <div className="card">
        <IdiomsCard />
      </div>
    </>
  );
}

export default App;
