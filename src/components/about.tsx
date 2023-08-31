export default function About() {
    return (
        <div className="text-white flex flex-col items-center gap-2">
            <h1 className="text-2xl">Luiz Arthur Bitencourt</h1>
            <div className="flex flex-col gap-2">
                <img src="\src\assets\my_photo.jpg" alt="Foto Luiz Bitencourt, tirada em frente ao Museu da Moda de Belo Horizonte" className="min-w-[8rem] w-32 rounded-full border-2 border-green-mint" />
                <div className="flex justify-between gap-2">
                    <a href="https://linkedin.com/in/luiz-arthur-bitencourt" target="_blank">
                        <img src="\src\assets\Icons\Linkedin\icon-linkedin-50.svg" alt="Ícone Linkedin"/>
                    </a>
                    <a href="https://github.com/guildnerd" target="_blank">
                        <img src="\src\assets\Icons\Github\icon-github-50.svg" alt="Ícone GitHub" />
                    </a>
                    <a href="https://stackoverflow.com/users/20164207/luiz-arthur-bitencourt" target="_blank">
                        <img src="\src\assets\Icons\Stack Overflow\icon-stack-overflow-50.svg" alt="Ícone Stack Overflow" />
                    </a>
                </div>
            </div>
            <div className="p-4">
                <p className="text-justify">
                    Desenvolvedor full-stack, designer de UI/UX e graduando de Sistemas de Informação na PUC Minas, atualmente cursando o 8º (e último) período. Sou apaixonado por tecnologia e me encontrei no desenvolvimento de software, onde busco sempre aplicar tanto o que aprendi em sala de aula quanto o
                    que absorvi com a minha experiência prévia de mercado. Considero o usuário como ponto central do desenvolvimento, por isso, gosto de acompanhar e contribuir durante todo ciclo de vida de desenvolvimento do software, da ideação à manutenção.
                </p>
            </div>
        </div>
    )
}