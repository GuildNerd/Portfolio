import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Project from "./project";
import { ProjectProps } from "./project";

export default function Projects() {
    var projectList: ProjectProps[] = [
        {
            projectName: "Aqui Tem Camponesa",
            projectLink: "https://apps.apple.com/br/app/aqui-tem-camponesa/id1560878823?platform=iphone",
            isGithubProject: false,
            iconSource: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ce/ae/4a/ceae4a5c-d980-93a7-1ddd-034271c8d687/AppIcon-1x_U007emarketing-0-10-0-0-0-85-220.png/246x0w.webp",
            imgAlt: "Logo do Aqui Tem Camponesa",
            description: "App B2B da antiga Embaré, hoje chamada \"Alvoar Lácteos\", no qual fui responsável pela prototipação e desenvolvimento das interfaces utilizando Figma e OutSystems. Atuei em conjunto com uma equipe engajada e unida, e aprendi na prática como é desenvolver software com qualidade e com foco no usuário/cliente."
        },
        {
            projectName: "Embaré Fomento",
            projectLink: "https://apps.apple.com/br/app/embaré-fomento/id1482950853?platform=iphone",
            isGithubProject: false,
            iconSource: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/68/e5/f2/68e5f23d-81dd-64d5-04b4-8154a892ecc1/AppIcon-1x_U007emarketing-0-10-0-0-0-85-220.png/246x0w.webp",
            imgAlt: "Logo do Embaré Fomento",
            description: "App para produtores de leite realizarem controle de coletas, análises de qualidade do leite e demonstrativos de pagamento. Fui responsável pela prototipação e desenvolvimento das interfaces utilizando Figma e OutSystems. Agregou muito para que eu aplicasse na prática meus conhecimentos de design de interface e desenvolvimento front-end."
        },
        {
            projectName: "Pizzaria Gian Carlo",
            projectLink: "https://github.com/GuildNerd/pizzaria-gian-carlo",
            isGithubProject: true,
            iconSource: "https://placehold.co/600x600",
            imgAlt: "Ícone da pizzaria",
            description: "Este projeto faz parte dos meus estudos de React, JavaScript e UI design. Para a construção do site utilizei as bibliotecas React e Tailwindcss, e para a prototipação das interfaces utilizei o Figma."
        },
        {
            projectName: "Pokédex",
            projectLink: "https://github.com/Guildnerd/Pokedex",
            isGithubProject: true,
            iconSource: "https://placehold.co/600x600",
            imgAlt: "Ícone de Pokédex",
            description: "Pokédex criada usando React, TypeScript, TailwindCSS e PokéAPI. É um projeto \"clássico\" de front-end, que visa testar as habilidades de criação de interfaces e criatividade, e também o conhecimento de JavaScript, principalmente no consumo de APIs"
        },
        {
            projectName: "AceUni",
            projectLink: "https://github.com/GuildNerd/TIAW-Aplicacao-Web",
            isGithubProject: true,
            iconSource: "https://placehold.co/600x600",
            imgAlt: "Ícone do AceUni, consiste no símbolo de PCD's com um prédio ao fundo",
            description: "Aplicação web com tema \"Acessibilidade nas instituições de ensino\", o intuito era criar uma ponte entre as pessoas com deficiência e as universidades, para que essas pessoas pudessem fornecer sugestões e críticas de melhorias para acessibilidade nos campi. Foi um trabalho em grupo desenvolvido no 2º período do curso de Sistemas de Informação, no qual fui responsável pelo desenvolvimento das interfaces. Página criada com HTML, CSS e JavaScript puro"
        },
        {
            projectName: "Top Selected News",
            projectLink: "https://github.com/GuildNerd/top_selected_news",
            isGithubProject: true,
            iconSource: "https://placehold.co/600x600",
            imgAlt: "Ícone do Top Selected News",
            description: "Primeiro site feito por mim. Foi um trabalho de faculdade da matéria \"Desenvolvimento de Interfaces Web\", a tarefa era criar um site de notícias que consumisse uma API de notícias fornecida pelo professor. Dentro do site é possível buscar notícias por palavras-chave e salvar essas palavras-chave para pesquisar novamente, caso o usuário deseje. A página foi criada com HTML, CSS e JavaScript puro"
        }
    ];

    return (
        <div className="flex flex-col gap-4 justify-center items-center" id="projects">
            <h2 className="text-white text-2xl font-bold">Projetos</h2>

            <Carousel showIndicators={false} showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} transitionTime={800} className="w-[100vw] mx-4 p-4">
                {
                    projectList.map((project) => {
                        return (
                            <Project 
                                projectName={project.projectName}
                                projectLink={project.projectLink}
                                isGithubProject={project.isGithubProject}
                                iconSource={project.iconSource}
                                imgAlt={project.imgAlt}
                                description={project.description}
                            />
                        )
                    })
                }
            </Carousel>
        </div>
    )
}