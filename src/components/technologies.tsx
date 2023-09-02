import { useState, useEffect } from "react";
import FrontEnd from "./technologies/frontEnd";
import BackEnd from "./technologies/backEnd";
import Tools from "./technologies/tools";

export default function Technologies() {
    const btnStyle = "py-2 px-4 rounded-md bg-green-mint"

    const [tech, setTech] = useState('front-end');

    const handleChangeTech = (event: React.MouseEvent<HTMLButtonElement>, techName: string) => {
        event.preventDefault();

        event.currentTarget.setAttribute('active', 'true');
        setTech(techName);
    }

    return (
        <div className="flex flex-col mt-4">
            <div className="flex justify-center">
                <h2 className="text-white text-xl font-bold">Tecnologias e Ferramentas</h2>
            </div>
            <div className="mt-2 flex justify-evenly lg:justify-center lg:gap-4 text-dark-lead">
                <button onClick={(event) => { handleChangeTech(event, 'front-end') }} className={`${btnStyle} ${tech == 'front-end' ? 'bg-green-neon' : ''}`}>
                    <h4>Front-end</h4>
                </button>
                <button onClick={(event) => { handleChangeTech(event, 'back-end') }} className={`${btnStyle} ${tech == 'back-end' ? 'bg-green-neon' : ''}`}>
                    <h4>Back-end</h4>
                </button>
                <button onClick={(event) => { handleChangeTech(event, 'tools') }} className={`${btnStyle} ${tech == 'tools' ? 'bg-green-neon' : ''}`}>
                    <h4>Ferramentas</h4>
                </button>
            </div>
            <div>
                {
                    tech == 'front-end' ? <FrontEnd />
                    :
                    tech == 'back-end' ? <BackEnd />
                    :
                    <Tools />
                }
            </div>
        </div>
    )
}