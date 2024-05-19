import React from 'react'
import Button from '../components/Button';


interface AboutProps {
  aboutData: {
    background: string;
    bgCard: string;
    image: string;
    spotify: string;
    title: string;
    subtitle: string;
    hobbies: string;
    github: string;
    linkedin: string;
  };
}

const AboutContent: React.FC<AboutProps> = ({ aboutData }) => {
  const { background, bgCard, image, spotify, title, subtitle, hobbies, github, linkedin } = aboutData;

  return (
    <div className={background}>
      <div className='flex flex-col md:flex md:flex-col  md:justify-center lg:flex lg:flex-row  lg:px-32 lg:py-20'>
        <div className='flex flex-col items-center justify-center content-center lg:justify-center lg:items-center'>
          <img className="w-48 md:w-56 mt-8 flex flex-col rounded-2xl border-2 border-black " src={image} alt="Profile" />
          <iframe className=" md:w-80 mt-8 h-20 " src={spotify} ></iframe>
        </div>


        <div className='mx-10 mt-8 mb-14 md:mx-26 md:text-20 lg:mx-14 lg:flex lg:flex-col text-16 '>
          <div className={bgCard}>
            <div className='px-10 py-6 lg:p-20'>
              <h2 className='font-lato font-bold text-black'>{title}</h2>
              <p className='font-raleway'>{subtitle}</p>
              <h3 className='font-lato font-bold text-black mt-2'>Interesses e Hobbies</h3>
              <ul className='font-raleway leading-relaxed text-justify'>
                <li>{hobbies}</li>
              </ul>
              <div className='flex flex-row my-10 mb-0 space-x-2'>
                <Button><a href={github} target="_blank">Github</a></Button>
                <Button><a href={linkedin} target="_blank">Linkedin</a></Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutContent
