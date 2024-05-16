import AboutContent from '../../components/AboutContent'

const About = () => {

    const aboutData = [
        { image: "/src/assets/home/3this/Photo 2.png", spotify: "", title: 'Watering', subtitle: 'water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "", linkedin: "", },
        { image: "/src/assets/home/3this/Photo 2.png", spotify: "", title: 'Watering', subtitle: 'water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.', hobbies: "Lorem ipsum dolor sit amet. Ut voluptatibus accusantium et praesentium minus ad natus distinctio non labore voluptatem. Ut nostrum nulla eos Quis amet id repellat voluptatem aut animi quod et nesciunt ipsa et sapiente ipsam et sapiente pariatur.", github: "", linkedin: "", },
    ];

    return (
        <div className="bg-white w-screen">
            <img src="/src/assets/home/3this/Photo 1.png" alt="plant" />
            <h1>JovemScript</h1>

            <div className=''>
                {aboutData.map((card, index) => (
                    <AboutContent key={index} aboutData={card} />
                ))}
            </div>
        </div>
    )
}

export default About
