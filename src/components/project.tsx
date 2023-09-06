export default function Project() {
    const style = {
        img: {  "flex-grow": 1, "width": "20rem"    },
        description: {  "flex-grow": 2, "color": "white"  }
    }
    return (
        <div className="flex">
            <div style={style.img}>
                <img src="https://via.placeholder.com/150" alt="" className="w-20 h-20" />
            </div>
            <div style={style.description} className="break-words">
                Este projeto faz parte dos meus estudos de React e JavaScript.
                Para a construção do site utilizei as bibliotecas React e Tailwindcss, e para a prototipação das interfaces utilizei o Figma.
            </div>
        </div>
    )
}