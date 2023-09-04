import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center" id="projects">
            <h2  className="text-white text-xl font-bold">Projetos</h2>
            <Carousel controls={true} keyboard={true} interval={5000} pause={'hover'} className="w-full h-[50vh]" >
                <Carousel.Item>
                    <div className="flex justify-center">
                        <img src="https://via.placeholder.com/150" alt="" className="w-auto h-[50vh]" />
                        <p>Teste</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="flex justify-center">
                        <img src="https://via.placeholder.com/150" alt="" className="w-auto h-[50vh]" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}