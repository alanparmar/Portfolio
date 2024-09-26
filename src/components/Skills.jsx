import React from 'react';
import SkillImg from   '../assets/asset 2.png';




const Skills = () => {
  return (
    
    <section id="skills" className="bg-white px-[13rem] dark:bg-gray-900 py-20 flex">
        <div className="container ">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white text-purple-500">Skills</h2>
        <div class="skills">
            <div class="skills__row">
                <div class="skills__item skills__item--html skills__item-fade-in">
                    <img src="./src/assets/html.png" alt=""/>
                    <div class="skills__item-name">HTML</div>
                </div>
                <div class="skills__item skills__item--react skills__item-fade-in">
                    <img src="./src/assets/react.png" alt=""/>
                    <div class="skills__item-name">REACT</div>
                </div>
                <div class="skills__item skills__item--npm skills__item-fade-in">
                    <img src="./src/assets/java.png" alt=""/>
                    <div class="skills__item-name">JAVA</div>
                </div>
            </div>
            <div class="skills__row">
                <div class="skills__item skills__item--js skills__item-fade-in">
                    <img src="./src/assets/js.png" alt=""/>
                    <div class="skills__item-name">JAVASCRIPT</div>
                </div>
                <div class="skills__item skills__item--css skills__item-fade-in">
                    <img src="./src/assets/css.png" alt=""/>
                    <div class="skills__item-name">CSS</div>
                </div>
                <div class="skills__item skills__item--python skills__item-fade-in">
                    <img src="./src/assets/py.jpeg" alt=""/>
                    <div class="skills__item-name">PYTHON</div>
                </div>
                <div class="skills__item skills__item--git skills__item-fade-in">
                    <img src="./src/assets/git.png" alt="" />
                    <div class="skills__item-name">GIT</div>
                </div>
            </div>
            <div class="skills__row">
                <div class="skills__item skills__item--sass skills__item-fade-in">
                    <img src="./src/assets/c.png" alt=""/>
                    <div class="skills__item-name">C/C++</div>
                </div>
                <div class="skills__item skills__item--webpack skills__item-fade-in">
                    <img src="./src/assets/sap.jpeg" alt=""/>
                    <div class="skills__item-name">SAP</div>
                </div>
                <div class="skills__item skills__item--r skills__item-fade-in">
                    <img src="./src/assets/csharp.png" alt=""/>
                    <div class="skills__item-name">C#</div>
                </div>
            </div>
        </div>
        </div>
        <img src={SkillImg} alt="Developer Illustration" className="w-1/2 " style={{width:'35rem', height:'35rem'}}/>
    </section>

        
  );
  
  
};


export default Skills;
