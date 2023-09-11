import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Project from "./project";
import { ProjectProps } from "./project";

export default function Projects() {
    var projectList: ProjectProps[] = [
        {
            projectName: "Pizzaria Gian Carlo",
            projectLink: "https://github.com/GuildNerd/pizzaria-gian-carlo",
            imgSrc: "https://placehold.co/600x600",
            imgAlt: "Ícone da pizzaria",
            description: "Este projeto faz parte dos meus estudos de React, JavaScript e UI design. Para a construção do site utilizei as bibliotecas React e Tailwindcss, e para a prototipação das interfaces utilizei o Figma."
        },
        {
            projectName: "Pokédex",
            projectLink: "https://github.com/Guildnerd/Pokedex",
            imgSrc: "https://placehold.co/600x600",
            imgAlt: "Ícone de Pokédex",
            description: "Pokédex creiada usando React, PokéAPI e TailwindCSS. É um projeto 'clássico' de front-end, que visa testar as habilidades de criação de interfaces e criatividade, e também o conhecimento de JavaScript, principalmente o consumo de APIs"
        },
        {
            projectName: "AceUni",
            projectLink: "https://github.com/GuildNerd/TIAW-Aplicacao-Web",
            imgSrc: "https://placehold.co/600x600",
            imgAlt: "Ícone do AceUni, consiste no símbolo de PCD's com um prédio ao fundo",
            description: "Aplicação web com tema \"Acessibilidade nas instituições de ensino\", o intuito era criar uma ponte entre as pessoas com deficiência e as universidades, para que essas pessoas pudessem fornecer sugestões e críticas de melhorias para acessibilidade nos campi. Foi um trabalho em grupo desenvolvido no 2º período do curso de Sistemas de Informação, no qual fui responsável pelo desenvolvimento das interfaces. Página criada com HTML, CSS e JavaScript puro"
        }
    ];

    return (
        <div className="flex flex-col gap-4 justify-center items-center" id="projects">
            <h2 className="text-white text-2xl font-bold">Projetos</h2>
            <Carousel showIndicators={false} showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} className="width-full mx-4 p-4">
                <div>
                    <Project projectLink={projectList[0].projectLink} projectName={projectList[0].projectName} imgSrc={projectList[0].imgSrc} imgAlt={projectList[0].imgAlt} description={projectList[0].description} />
                </div>
                <div>
                    <Project projectLink={projectList[1].projectLink} projectName={projectList[1].projectName} imgSrc={projectList[1].imgSrc} imgAlt={projectList[1].imgAlt} description={projectList[1].description} />
                </div>
                <div>
                    <Project projectLink={projectList[2].projectLink} projectName={projectList[2].projectName} imgSrc={projectList[2].imgSrc} imgAlt={projectList[2].imgAlt} description={projectList[2].description} />
                </div>
            </Carousel>
        </div>
    )
}