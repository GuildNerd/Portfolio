import { useState } from "react";
import FrontEnd from "./technologies/frontEnd";
import BackEnd from "./technologies/backEnd";
import Tools from "./technologies/tools";

export default function Technologies() {
    const [page, setPage] = useState('front');

    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <h2 className="text-white text-xl font-bold">Tecnologias e Ferramentas</h2>
            </div>
            <div className="mt-2 flex justify-evenly text-dark-lead">
                <button className="py-2 px-4 rounded-md bg-green-neon">
                    <h4>Front-end</h4>
                </button>
                <button className="py-2 px-4 rounded-md bg-green-mint">
                    <h4>Back-end</h4>
                </button>
                <button className="py-2 px-4 rounded-md bg-green-mint">
                    <h4>Ferramentas</h4>
                </button>
            </div>
            <div>
                {
                    page == 'front' ?
                        <FrontEnd />
                    :
                    page == 'back' ?
                        <BackEnd />
                    :
                        <Tools />
                }
            </div>
        </div>
    )
}