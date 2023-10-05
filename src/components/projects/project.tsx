import CodeIcon from '@mui/icons-material/Code';

export interface ProjectProps {
    projectName: string,
    projectLink: string,
    isGithubProject: boolean,
    iconSource: string,
    imgAlt?: string,
    description: string,
}

export default function Project({ projectName, projectLink, isGithubProject, iconSource, imgAlt, description }: ProjectProps){
    const style = {
        img: {  "flexGrow": "1", "flexBasis": 0, "width": "100%", "display": "flex", "justifyContent": "center"  },
        description: {  "flexGrow": "3", "flexBasis": 0, "color": "white"  }
    }

    return (
        <div className="flex md:flex-row flex-col px-8 w-full">
            <div style={style.img}>
                <img src={iconSource} alt={imgAlt} className="!w-40 lg:!w-48 !h-40 lg:!h-48 rounded-full"/>
            </div>
            <div style={style.description} className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">{projectName}</h4>
                <p>{description}</p>
                <a href={projectLink} target="_blank" className="w-max">
                    <button className="flex gap-1 items-center py-2 px-4 rounded-md bg-green-mint hover:bg-green-neon text-black transition-colors">
                        {
                            isGithubProject ?
                                <img src="\src\assets\icons\Github\icon-github.png" alt="Ícone Github" className="!w-4 h-4" />
                            :
                            <CodeIcon/>
                        }
                        Ver mais
                    </button>
                </a>
            </div>
        </div>
    )
}