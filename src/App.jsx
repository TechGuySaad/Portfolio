import Github from "./assets/images/icon-github.svg";
import Linkedin from "./assets/images/icon-linkedin.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import ProfileImage from "./assets/images/profile-img.jpg";
import Kanban from './assets/images/Kanban.png'
import Rating from './assets/images/Rating.png'
import Payment from './assets/images/payment.png'
import Pokedex from './assets/images/Pokedex.png'
import Tip from './assets/images/TipCalculator.png'
import { motion } from 'framer-motion';


function App() {
  const pageVariants = {
    initial: {
      filter: 'blur(20px)',
    },
    animate: {
      filter: 'blur(0)',
      transition: { duration: 2 },
    },
  };
  return (
    <div className="app w-full h-fit flex flex-col ">
      <motion.div className="app-container w-full h-screen bg-black pt-8 px-40 flex flex-col "
       initial="initial"
       animate="animate"
       variants={pageVariants}
      >
        <div className="nav text-white w-full flex items-center justify-between flex-wrap">
          <h1 className="font-bold w-56  h-12 text-lg">saadrahman</h1>
          <div className="links flex gap-x-8 z-50 items-center">
            <a href="https://github.com/TechGuySaad">
              {" "}
              <img src={Github} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/saad-rahman-59696a1bb/">
              {" "}
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a href="https://twitter.com/TechGuySaad">
              {" "}
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>

        <div className="intro flex  items-center w-full text-white justify-between pt-12 relative ">
          <div className="intro-text flex flex-col gap-y-12 w-1/2 z-50 mt-40">
            <h1 className="text-7xl font-bold">
              Nice to meet you! <br /> I{"'"}m{" "}
              <span className="border-b-4 border-blue-600 ">Saad Rahman</span>.
            </h1>
            <p className="w-96 text-sm font-semibold text-gray-300">
              Based in the Pakistan, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <a href="https://www.linkedin.com/in/saad-rahman-59696a1bb/" className="font-bold border-b-2 border-blue-600 w-fit pb-2">
              CONTACT ME
            </a>
          </div>

          <div className="profile-image w-1/2 flex absolute z-10">
            <img src={ProfileImage} alt="profile img" />
          </div>
         
        </div>

        <div className="expertise text-white flex flex-wrap gap-x-28 gap-y-20 pt-12 items-center w-full justify-center">

          <div className="skill">
            <h1>HTML</h1>
            <p>2 Years Experience</p>
          </div>
          <div className="skill">
            <h1>CSS</h1>
            <p>2 Years Experience</p>
          </div>
          <div className="skill">
            <h1>JavaScript</h1>
            <p>2 Years Experience</p>
          </div>
          <div className="skill">
            <h1>React</h1>
            <p>1 Year Experience</p>
          </div>
          <div className="skill">
            <h1>TailwindCSS</h1>
            <p>1 Year Experience</p>
          </div>
          <div className="skill">
            <h1>Bootstrap</h1>
            <p>2 Years Experience</p>
          </div>

          <div className="skill">
            <h1>Firebase</h1>
            <p>6 Month Experience</p>
          </div>

        </div>

        <div className="projects flex text-white gap-y-12 flex-col mt-12 w-full">
          <div className="heading flex w-full items-center justify-between">

          <h1 className="text-7xl font-bold">Projects</h1>
          <a href="https://www.linkedin.com/in/saad-rahman-59696a1bb/" className="font-bold border-b-2 border-blue-600 w-fit pb-2">
              CONTACT ME
            </a>
          </div>

          <div className="projects-desc flex items-center justify-center gap-y-10 gap-x-10 flex-wrap w-full">

            <a href="https://eclectic-manatee-f07765.netlify.app/" className="project flex flex-col gap-y-2">
              <img className="w-96" src={Rating} alt="" />
              <h2 className="font-semibold text-xl">Interactive Rating Component</h2>
              <p className="tech-stack text-sm font-medium text-gray-400">
                HTML CSS JAVASCRIPT
              </p>



            </a>

            <a href="https://gentle-heliotrope-eec01b.netlify.app/" className="project flex flex-col gap-y-2">
              <img className="w-96" src={Payment} alt="" />
              <h2 className="font-semibold text-xl">Payment Component</h2>
              <p className="tech-stack text-sm font-medium text-gray-400">
                HTML CSS JAVASCRIPT
              </p>



            </a>

            <a href="https://funny-taiyaki-991448.netlify.app/" className="project flex flex-col gap-y-2">
              <img className="w-96" src={Pokedex} alt="" />
              <h2 className="font-semibold text-xl">Pokedex</h2>
              <p className="tech-stack text-sm font-medium text-gray-400">
                HTML CSS JAVASCRIPT
              </p>



            </a>

            <a href="https://beautiful-kitsune-b908bc.netlify.app/" className="project flex flex-col gap-y-2">
              <img className="w-96" src={Tip} alt="" />
              <h2 className="font-semibold text-xl">Tip Calculator</h2>
              <p className="tech-stack text-sm font-medium text-gray-400">
                HTML CSS JAVASCRIPT
              </p>



            </a>

           

            <a href=" https://effervescent-sfogliatella-9ec3b3.netlify.app/" className="project flex flex-col gap-y-2">
              <img className="w-96" src={Kanban} alt="" />
              <h2 className="font-semibold text-xl">Kanban Task Management</h2>
              <p className="tech-stack text-sm font-medium text-gray-400">
                HTML CSS JAVASCRIPT
              </p>



            </a>

           

            

           
          </div>
        </div>

        

        
    
      </motion.div>
     
    </div>
  );
}

export default App;
