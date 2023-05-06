import {Tilt} from 'react-tilt';
import './WebDevProject.css';

const  WebDevProject = (props) => {
    const details = props.project;
    const {name, img, github, live_site} = details;
   
    return (
        <div className='webDev-container'>
          <Tilt>
          <div className='img'>
                <img src={img} alt="" />
                <div className='hoverButton'>
                    <h4>{name}</h4>
                    <div className='explore-button'>
                            <a href={github} target="_blank" rel="noreferrer"><button>Github</button></a>
                            <a href={live_site} target="_blank" rel="noreferrer"><button>Live</button></a>
                    </div>
                </div>
           </div>
          </Tilt>
        </div>
    );
};

export default WebDevProject;