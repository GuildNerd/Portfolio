import Technology from "./technology"

export default function Tools() {
    return (
        <div className="pt-8 flex flex-wrap justify-evenly text-white">
            <Technology link="https://www.figma.com/" altImgLink="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" techName="Figma"/>
            <Technology link="https://git-scm.com/" altImgLink="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" techName="Git"/>
            <Technology link="https://www.github.com" imgLink="github" techName="GitHub"/>
            <Technology link="https://www.mysql.com/" imgLink="mysql" techName="MySQL"/>
            <Technology link="https://www.microsoft.com/en-us/sql-server" altImgLink="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" techName="SQlServer"/>
        </div>
    )
}