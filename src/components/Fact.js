import '../styles/fact.css';
import factsImg from '../images/facts.png'

const Fact = () => {
    const facts = [
        "Water covers about 71% of the Earth's surface.",
        "Only about 3% of the world's water is fresh, and most of that is trapped in glaciers and ice caps.",
        "The human body is made up of about 60% water.",
        "Water is essential for all forms of life on Earth.",
        "The chemical formula for water is H2O.",
        "Water is the only substance that can exist naturally in all three states of matter - solid, liquid, and gas.",
        "Water freezes at 0 degrees Celsius and boils at 100 degrees Celsius.",
        "Water expands when it freezes, which is why ice floats on water.",
        "Water is a great solvent and can dissolve many substances.",
        "Water has a high specific heat, which means it can absorb a lot of heat energy without its temperature increasing significantly.",
        "Water is often used as a coolant in industrial processes because of its high specific heat.",
        "The word 'water' comes from the Old English word 'wæter.'",
        "The average person in the United States uses about 80-100 gallons of water per day.",
        "Water can be found in many forms, including rain, snow, sleet, hail, and fog.",
        "The Earth's oceans contain about 97% of the world's water.",
        "The Dead Sea, located between Israel and Jordan, is so salty that people can easily float in it.",
        "The longest river in the world is the Nile River, which stretches 4,135 miles.",
        "Water scarcity affects more than 40% of the world's population.",
        "Water pollution is a major problem in many parts of the world.",
        "The Great Barrier Reef, located off the coast of Australia, is the largest coral reef system in the world.",
        "Water is used to generate electricity in hydroelectric power plants.",
        "Water can carry electricity because it contains ions that can conduct electricity.",
        "Water is essential for agriculture, as it is used to irrigate crops.",//replace
        "The average person can survive for about 3-5 days without water.",
        "Water can be split into hydrogen and oxygen through a process called electrolysis.",
        "The water cycle is the continuous movement of water on, above, and below the Earth's surface.",
        "The average American household uses about 320 gallons of water per day.",
        "The amount of water on Earth is relatively constant, but its distribution and quality are constantly changing.",
        "Water is a good insulator, which means it can help keep things warm or cool. ",
        "Water is sometimes referred to as the 'universal solvent' because of its ability to dissolve many substances.",
        "The Great Lakes, located in North America, contain about 20% of the world's fresh surface water.",
        "Water can act as a lubricant, reducing friction between surfaces.",
        "Water can be used to create steam, which can power turbines in steam engines.",
        "The human brain is about 73% water.",
        "Water can be used to transport goods and people by boat or ship.",
        "Water can be used to make paper, as it is used in the pulp and paper industry.",
        "Water can be treated and purified for drinking through a variety of methods, including filtration and disinfection.",
        "Water is a good conductor of sound, which is why underwater sounds can travel long distances.",
        "The ocean is home to many species of marine life, including whales, dolphins, sharks, and fish."
    ]

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    // Display the fact of the day
    const factIndex = dayOfYear % facts.length;
    const factOfTheDay = facts[factIndex];

    return (
        <>
            <div className='sectionWrapper'>
                <div className='factSectionContainer sectionWrapperWidth'>
                    <div className='factContainer'>
                        <div className='factImg'>
                            <img src={factsImg} alt='Icon with the text Did you Know? With a lightbulb beside it.'></img>
                        </div>
                        <div className='factTop'>
                            <h1>H2O fact of the day</h1>
                        </div>
                        <div className='factMid'>
                            <h3>{factOfTheDay}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fact;
