import React from 'react';
import './About.css';
import photo from '../../Images/photo.png'
import icon1 from '../../Images/Skills icon/html.png'
import icon2 from '../../Images/Skills icon/css.png'
import icon3 from '../../Images/Skills icon/js.png'
import icon4 from '../../Images/Skills icon/bootstrp.png'
import icon5 from '../../Images/Skills icon/react.png'
import icon6 from '../../Images/Skills icon/tailwind.png'
import icon7 from '../../Images/Skills icon/dode.png'
import icon8 from '../../Images/Skills icon/mongo.png'


const About = () => {
    return (
        <div className='container'>
        <div className='protfolio-container'>
            <div className=' p-5 info-detail'>
                <h1><span className='hello'>Hello...!</span></h1>
                <h3 className='text-xl font-semibold'>I <span className='text-orange-500'>'Am</span> Naimur Rahaman Emon</h3>
                <p className='job-title'>Professional Graphic Designer & Web Developer.</p>
                {/* <p className='mt-4'>Future Goals is Become an Full Stack Web Developer.I will work hard for the next 5-6 months to keep my position in the programming sector stable InshaAllah.  I will try to improve new skills to survive in the programming sector.  Since my dream is to be a full-stack developer, I will work hard and play an important role in the IT sector of the country.</p> */}
                <div className='contact-info'>
                    <h5 className='font-bold text-orange-500'>Contact Info :</h5>
                    <p><span className='font-semibold'>Email :</span> mdnaimurrahaman202@gmail.com</p>
                    <p><span className='font-semibold'>Phone :</span> +88 014 0272 3889</p>
                </div>
                <button className='hero-btn btn mt-8'>More Info</button>
            </div>
            <div className='p-5'>
                <img className='about-img w-100' src={photo} alt="" srcset="" />
            </div>
        </div>
        <div className='education-skills'>
            <div className='contact-info'>
                <h1 className='text-xl font-semibold'>Education</h1>
                <div className='line'></div>
                <div className='mt-5'>
                    <div>
                        <p className='font-semibold'>Education Level :</p>
                        <p>Bachelor Of Business Studies</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Exam/Degree Title :</p>
                        <p>BBS</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Institution Name :</p>
                        <p>Nawab Faizunnesa Gov.College,Laksham.</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Passing Year :</p>
                        <p>Current 1st Year.</p>
                    </div>
                </div>
            </div>
            <div className='skill-container'>
                <h1 className='text-xl font-semibold'>Skills</h1>
                <div className='line'></div>
                <div  className='skills-img'>
                    <div className='icon-bg'>
                        <img src={icon1} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon2} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon3} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon4} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon5} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon6} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon7} alt="" srcset="" />
                    </div>
                    <div className='icon-bg'>
                        <img src={icon8} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;