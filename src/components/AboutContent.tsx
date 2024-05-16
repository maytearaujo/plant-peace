import React from 'react'

interface AboutProps {
  aboutData: {
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
  const { image, spotify, title, subtitle, hobbies, github, linkedin } = aboutData;

  return (
    <div>
      <div>
        <img src={image} alt="Profile" />
        <li><a href={spotify}></a></li>
      </div>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <h3>Interesses e Hobbies</h3>
          <ul>
            <li>{hobbies}</li>
          </ul>
        </div>
        <div>
          <button>Github</button>
          <button>Linkedin</button>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
