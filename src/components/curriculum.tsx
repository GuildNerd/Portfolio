export default function Curriculum () {
    return(
        <div className="flex flex-col gap-4 justify-center items-center" id="projects">
            <h2 className="text-white text-2xl font-bold">Currículo</h2>
            <p className="text-white">Você encontra mais informações no meu currículo, faça o download clicando no botão abaixo.</p>
            <a href="./assets/Curriculo Luiz Bitencourt.png" download="Curriculo Luiz Bitencourt.pdf" className="w-max">
                <button className="p-2 rounded-md bg-green-mint hover:bg-green-neon">
                    Baixar currículo
                </button>
            </a>
        </div>
    )
}