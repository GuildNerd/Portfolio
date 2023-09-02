import Technology from "./technology"

export default function BackEnd() {
    return (
        <div className="pt-8 flex flex-wrap justify-evenly text-white">
            <Technology link="https://www.w3schools.com/cs/" imgLink="csharp" techName="C#"/>
            <Technology link="https://www.java.com" imgLink="java" techName="Java"/>
            <Technology link="https://nodejs.org" imgLink="nodejs" techName="Node.js"/>
        </div>
    )
}