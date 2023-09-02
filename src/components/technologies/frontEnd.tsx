import Technology from "./technology"

export default function FrontEnd() {
    return (
        <div className="pt-8 flex flex-wrap justify-evenly text-white">
            <Technology link="https://www.w3.org/html/" imgLink="html5" techName="HTML5"/>
            <Technology link="https://www.w3schools.com/css/" imgLink="css3" techName="CSS3"/>
            <Technology link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" imgLink="javascript" techName="JavaScript"/>
            <Technology link="https://react.dev" imgLink="react" techName="React jS"/>
            <Technology link="https://tailwindcss.com/" altImgLink="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" techName="TailwindCSS"/>
            <Technology link="https://getbootstrap.com" imgLink="bootstrap" techName="Bootstrap"/>
            <Technology link="https://www.typescriptlang.org/" imgLink="typescript" techName="TypeScript"/>
        </div>
    )
}