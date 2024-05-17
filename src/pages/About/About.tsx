import AboutContent from '../../components/AboutContent'

const About = () => {

    const aboutData = [
        { background:"bg-wisper", bgCard:"rounded-2xl border-2 border-black bg-cardAbout", image: "/src/assets/home/3this/Photo 2.png", spotify: "https://open.spotify.com/embed/playlist/5LsIubsKphur4HJaXv5Z8b?utm_source=generator&theme=0", title: 'Nome do Bolsista, X anos.', subtitle: 'cidade', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "https://github.com/", linkedin: "https://br.linkedin.com/", },
        { background:"bg-bgAbout", bgCard:"rounded-2xl border-2 border-black bg-wisper", image: "/src/assets/home/3this/Photo 2.png", spotify: "https://open.spotify.com/embed/playlist/5LsIubsKphur4HJaXv5Z8b?utm_source=generator&theme=0", title: 'Nome do Bolsista, X anos.', subtitle: 'cidade', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "https://github.com/", linkedin: "https://br.linkedin.com/", },
        { background:"bg-wisper", bgCard:"rounded-2xl border-2 border-black bg-cardAbout", image: "/src/assets/home/3this/Photo 2.png", spotify: "https://open.spotify.com/embed/playlist/5LsIubsKphur4HJaXv5Z8b?utm_source=generator&theme=0", title: 'Nome do Bolsista, X anos.', subtitle: 'cidade', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "https://github.com/", linkedin: "https://br.linkedin.com/", },
        { background:"bg-bgAbout", bgCard:"rounded-2xl border-2 border-black bg-wisper", image: "/src/assets/home/3this/Photo 2.png", spotify: "https://open.spotify.com/embed/playlist/5LsIubsKphur4HJaXv5Z8b?utm_source=generator&theme=0", title: 'Nome do Bolsista, X anos.', subtitle: 'cidade', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "https://github.com/", linkedin: "https://br.linkedin.com/", },
        { background:"bg-wisper", bgCard:"rounded-2xl border-2 border-black bg-cardAbout", image: "/src/assets/home/3this/Photo 2.png", spotify: "https://open.spotify.com/embed/playlist/5LsIubsKphur4HJaXv5Z8b?utm_source=generator&theme=0", title: 'Nome do Bolsista, X anos.', subtitle: 'cidade', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "https://github.com/", linkedin: "https://br.linkedin.com/", },
    ];
    
    return (
        <div className="bg-white w-screen relative">
            <div className="relative">
                <img className='w-screen h-[100px] object-cover opacity-40' src="/src/assets/home/3this/Photo 1.png" alt="plant" />
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
