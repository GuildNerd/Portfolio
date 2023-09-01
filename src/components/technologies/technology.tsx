export interface TechnologyProps {
    link: string,
    imgLink: string,
    techName: string,
}

export default function Technology({link, imgLink, techName }: TechnologyProps){
    return(
        <h1>{link}</h1>
    )
}