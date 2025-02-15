import { Grid, Container} from '@mui/material';
import CardInfo from '../components/profile/cardinfo';
import HelloWorld from '../image/feed/helloworld.png' 
import PicGif from '../image/feed/test.gif' 
import Phrase from '../image/feed/phrase.png' 
import CoderGirl from '../image/feed/codergirl.png'
import Pics from '../image/feed/pic3.png'
import MySkills from '../image/feed/myskills.png'
const Profile = () => {

    // const feed = [
    //     {
    //         name:"Hello World 🌎",
    //         pic:HelloWorld,
    //         description:"I am Renchi Meléndez, 21 years old. I was born in the city of San Pedro Sula, Honduras. I am half Honduran and half Filipina. I'm currently living in Managua, Nicaragua, where I find myself studying an engineering degree at Universidad Centroamericana (UCA)."
    //     },
    //     {
    //         name:"Information Systems Engineering Student 👩🏽‍💻",
    //         pic:PicGif,
    //         description:"I will be graduating in the first semester of 2023. I'm a scholarship student since my first year at Universidad Centroamericana, where I'm also part of the students with academic excellence. UCA is a prestigious Jesuit university located in the capital of Nicaragua."
    //     },
    //     {
    //         name:"How i started in Tech 🚀",
    //         pic:Phrase,
    //         description:"Since I was a child, I've been inspired by the use of computers, I really liked creating letters or poems in text editors and creating videos with images and transitions. When I started my career I didn't know much about what programming was, however, developing my first project built in C/C++ was what allowed me to decide that this was really what I wanted to be."
    //     },
    //     {
    //         name:"<Coder Girl🤍/>",
    //         pic:CoderGirl,
    //         description:"In 2021 I found out Rocket Girls through Instagram, the purpose of the page and the way they promote girls caught my attention. Being a student of Rocket Girl lets me to keep improving my programming skills. Thanks to them and to the company P&G I was able to obtain a scholarship to certify myself as an Administrator in Salesforce, which I am totally grateful for allowing me to learn more about this platform."
    //     },
    //     {
    //         name:"What i like to do ✨",
    //         pic:Pics,
    //         description:"In my free time I like to watch movies, listen to music and do skincare. I really like to travel and get to know places that are related to nature, walk along paths and enjoy the beautiful landscapes. In addition to programming, I also enjoy making video edits, in fact, I have made around 150 video tutorials for teachers, students and administrators for the use of educational platforms as Moodle, Google and PowerCampus."
    //     },
    //     {
    //         name:"Skills and abilities 📊",
    //         pic:MySkills,
    //         description: <Skills/>
    //     }
    // ];

    const feed = [
        {
            name: "Hello World 🌎",
            pic: HelloWorld,
            description: "I am Renchi Meléndez, originally from San Pedro Sula, Honduras, with Filipino heritage. Currently based in Managua, Nicaragua, I am a Systems Engineer passionate about automation, Salesforce solutions, and continuous learning."
        },
        {
            name: "Salesforce Admin-eloper 💼",
            pic: PicGif,
            description: "I specialize in optimizing business processes using Salesforce. With experience in Sales Cloud, Service Cloud, Experience Cloud, and automation with Flows, I help companies enhance efficiency and productivity. I have also developed LWC components and Apex classes to extend Salesforce functionality and worked with Copado for managing deployments."
        },
        {
            name: "How I Started in Tech 🚀",
            pic: Phrase,
            description: "My passion for technology started at a young age, exploring computers and video editing. While pursuing my engineering degree, I discovered programming through my first project in C/C++. Later, I had the opportunity to enter the Salesforce ecosystem thanks to a scholarship from P&G and Rocket Girls, which allowed me to earn my first certification and sparked my interest in CRM solutions and automation."
        },
        {
            name: "<Coder Girl🤍/>",
            pic: CoderGirl,
            description: "Since then, I have continued expanding my knowledge, earning more certifications, and working on automation, workflow optimization, and CRM solutions to improve business efficiency. Recently, I have been specializing in AI, creating agents and prompts within Salesforce to enhance automation and decision-making."
        },
        {
            name: "What I Love to Do ✨",
            pic: Pics,
            description: "Beyond tech, I enjoy traveling, nature, and creating video edits. I have produced over 150 tutorial videos for educational platforms like Moodle, Google, and PowerCampus, combining my passion for technology and education. I also love teaching others and have led several Salesforce workshops to share my knowledge."
        },
        {
            name: "Skills and Abilities 📊",
            pic: MySkills,
            description: "Experienced in Salesforce administration, process automation, and CRM solutions. Skilled in Sales Cloud, Service Cloud, Experience Cloud, and Flows. Proficient in LWC, Apex, Copado deployments, and AI-powered agents and prompts in Salesforce. Passionate about problem-solving, training, and innovation."
        }        
    ];
    
    return(

        <Container maxWidth="xl" sx={{ py:5 }} > 

            <Grid container spacing={{xl:'30',lg:'15', md:'15', xs:'20'}} 
                alignItems="center" justifyContent="center" direction="row">

                    {feed.map((data)=>(
                        <Grid item xs={12} md={4} lg={3.5} display="flex" 
                        alignItems="center" justifyContent="center">
                            <CardInfo name={data.name} image={data.pic} description={data.description} />
                        </Grid>
                    ))}

            </Grid>

      </Container>

    );
};

export default Profile;