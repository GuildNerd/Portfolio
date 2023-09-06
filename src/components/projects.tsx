import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Project from "./project";

export default function Projects() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center" id="projects">
            <h2 className="text-white text-xl font-bold">Projetos</h2>
            <Carousel showIndicators={true} showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} className="width-full mx-4 p-4">
                <div>
                    <Project />
                </div>
                <div>
                    <Project />
                </div>
            </Carousel>
        </div>
    )
}