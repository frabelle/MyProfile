import { Grid, Container, Stack} from '@mui/material';
import CardInfo from '../components/profile/cardinfo';
import HelloWorld from '../image/feed/helloworld.png' 
import PicGif from '../image/feed/test.gif' 
import Phrase from '../image/feed/phrase.png' 
import CoderGirl from '../image/feed/codergirl.png'
import Pics from '../image/feed/pic3.png'
import MySkills from '../image/feed/myskills.png'

const Profile = () => {

    const feed = [
        {
            name:"Hello World 🌎",
            pic:HelloWorld,
            description:"I am Renchi Meléndez, 21 years old. I was born in the city of San Pedro Sula, Honduras. I am half Honduran and half Filipina. I'm currently living in Managua, Nicaragua, where I find myself studying an engineering degree at Universidad Centroamericana (UCA)."
        },
        {
            name:"Information Systems Engineering Student 👩🏽‍💻",
            pic:PicGif,
            description:"I am graduating in the first semester of 2023. I have been a scholarship student since my first semester at Universidad Centroamericana, where I'm also part of the students with academic excellence. UCA is a prestigious Jesuit university located in the capital of Nicaragua."
        },
        {
            name:"How i started in Tech 🚀",
            pic:Phrase,
            description:"When I started my career I did not have the notions or knowledge about programming or related topics in technology. However, as I progressed I began to look for ways and alternatives to continue improving and learning on this path. My inspiration to focus on this field was when I created my first application in C/C++."
        },
        {
            name:"<Coder Girl🤍/>",
            pic:CoderGirl,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name:"What i like to do ✨",
            pic:Pics,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name:"Skills and abilities 📊",
            pic:MySkills,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
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