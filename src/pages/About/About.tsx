import AboutContent from '../../components/AboutContent'

const About = () => {

    const aboutData = [
        { background:"bg-wisper", bgCard:"rounded-2xl border-2 border-black bg-cardAbout", image: "/src/assets/about/mayte.jpg", spotify: "https://open.spotify.com/embed/playlist/6brnn7kQ2A4Im1ZsjQ6sEU?utm_source=generator", title: 'Maytê Araújo', subtitle: 'Praia Grande-SP', hobbies: "Pilates, ler, séries.", github: "https://github.com/maytearaujo", linkedin: "https://www.linkedin.com/in/maytearaujo/", },
        { background:"bg-bgAbout", bgCard:"rounded-2xl border-2 border-black bg-wisper", image: "/src/assets/about/ale.jpg", spotify: "https://open.spotify.com/embed/playlist/5LsIubsKphur4HJaXv5Z8b?utm_source=generator&theme=0", title: 'Alerrandra Gonsalves Sissa', subtitle: 'Presidente Prudente-SP', hobbies: "Tocar instrumentos musicais, desenhar, fotografar, ler.", github: "https://github.com/Ale00gs", linkedin: "https://www.linkedin.com/in/alerrandra/", },
        { background:"bg-wisper", bgCard:"rounded-2xl border-2 border-black bg-cardAbout", image: "/src/assets/about/beca.jpg", spotify: "https://open.spotify.com/embed/playlist/5EBPyhKvxk8EGpF0hLAlAv?utm_source=generator", title: 'Rebeca Santos', subtitle: 'Sorocaba-SP', hobbies: "Cozinhar, desenhar, pintar.", github: "https://github.com/rebcs", linkedin: "https://www.linkedin.com/in/rebeca-santos-1b9766257/", },
        { background:"bg-bgAbout", bgCard:"rounded-2xl border-2 border-black bg-wisper", image: "/src/assets/about/MariaEduarda.jpg", spotify: "https://open.spotify.com/embed/playlist/3PwutLiElOYWoHi6QqB7YL?utm_source=generator&theme=0", title: 'Maria Eduarda', subtitle: 'Jacupiranga-SP', hobbies: "Dança, crochê, séries.", github: "https://github.com/maducsilva", linkedin: "https://www.linkedin.com/in/maria-eduarda-cardoso-da-silva-a81807288/", },
        { background:"bg-wisper", bgCard:"rounded-2xl border-2 border-black bg-cardAbout", image: "/src/assets/about/vitor.jpg", spotify: "https://open.spotify.com/embed/playlist/2sU4xMdtfvemhdGJz8AoZK?utm_source=generator", title: 'Vitor Hugo Antunes', subtitle: 'Mauá - SP', hobbies: "Música e terror.", github: "https://github.com/VitorHugoAntunes", linkedin: "https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/", },
    ];
    
    return (
        <div className="bg-wisper w-screen relative">
            <div className="relative">
                <img className='w-screen h-[100px] object-cover opacity-40' src="/src/assets/home/3this/photo4.png" alt="plant" />
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-ebGaramond font-bold md:text-64 text-primaryLunarGreen drop-shadow-md text-50'>JovemScript</h1>
            </div>

            <div>
                {aboutData.map((card, index) => (
                    <AboutContent key={index} aboutData={card} />
                ))}
            </div>
        </div>
    )
}

export default About
