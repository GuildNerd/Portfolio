export interface TechnologyProps {
    link: string,
    imgLink?: string,
    altImgLink?: string,
    techName: string,
}

export default function Technology({ link, imgLink, altImgLink, techName }: TechnologyProps) {
    return (
        <div className="animate-fadeIn">
            <a href={link} target="_blank" className="flex flex-col justify-center items-center gap-1">
                <img src={altImgLink ? altImgLink : `https://raw.githubusercontent.com/devicons/devicon/master/icons/${imgLink}/${imgLink}-original.svg`} alt={`Ícone ${techName}`} className="w-8" />
                <p>{techName}</p>
            </a>
        </div>
    )
}