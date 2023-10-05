import { useState, useEffect } from "react";
import FrontEnd from "./frontEnd";
import BackEnd from "./backEnd";
import Tools from "./tools";

export default function Technologies() {
    const btnStyle = "py-2 px-4 rounded-md bg-green-mint"

    const [tech, setTech] = useState('front-end');

    const handleChangeTech = (event: React.MouseEvent<HTMLButtonElement>, techName: string) => {
        event.preventDefault();

        event.currentTarget.setAttribute('active', 'true');
        setTech(techName);
    }

    return (
        <div className="flex flex-col" id="technologies">
            <div className="flex justify-center">
                <h2 className="text-white text-2xl font-bold">Tecnologias e Ferramentas</h2>
            </div>
            <div className="mt-2 flex justify-evenly md:justify-center md:gap-4 text-dark-lead">
                <button onClick={(event) => { handleChangeTech(event, 'front-end') }} className={`${btnStyle} ${tech == 'front-end' ? 'bg-green-neon' : ''}`}>
                    <h3>Front-end</h3>
                </button>
                <button onClick={(event) => { handleChangeTech(event, 'back-end') }} className={`${btnStyle} ${tech == 'back-end' ? 'bg-green-neon' : ''}`}>
                    <h3>Back-end</h3>
                </button>
                <button onClick={(event) => { handleChangeTech(event, 'tools') }} className={`${btnStyle} ${tech == 'tools' ? 'bg-green-neon' : ''}`}>
                    <h3>Ferramentas</h3>
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