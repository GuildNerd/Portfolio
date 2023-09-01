export default function FrontEnd() {
    const styleImg = "w-8";
    const styleDivTech = "flex flex-col justify-center";
    return (
        <div className="flex justify-evenly text-white">
            <div>
                <a href="https://www.w3.org/html/" target="_blank">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="Ícone HTML" className={styleImg}/>
                    <p>HTML5</p>
                </a>
            </div>
            <div>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Ícone CSS3" className={styleImg}/>
                    <p>CSS3</p>
                </a>
            </div>
            <div>
                <a href="https://react.dev/" target="_blank">
                    <img src="" alt="" />
                    <p></p>
                </a>
            </div>
        </div>
    )
}