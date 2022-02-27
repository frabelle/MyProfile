import { Box, Grid, Container, Typography, Divider } from '@mui/material';
import CardInfo from '../components/profile/cardinfo';
import HelloWorld from '../image/feed/helloworld.png' 
import MyPic from '../image/feed/mypic.png'
import PicGif from '../image/feed/test.gif' 
import PicGif2 from '../image/feed/test2.gif' 
import Phrase from '../image/feed/phrase.png' 
import CoderGirl from '../image/feed/codergirl.png'
import Pics from '../image/feed/pic3.png'
import MySkills from '../image/feed/myskills.png'

const Profile = () => {

    const feed = [
        {
            name:"1",
            pic:HelloWorld,
        },
        {
            name:"2",
            pic:PicGif,
        },
        {
            name:"3",
            pic:Phrase,
        },
        {
            name:"4",
            pic:CoderGirl,
        },
        {
            name:"5",
            pic:Pics,
        },
        {
            name:"6",
            pic:MySkills,
        }
    ];

    return(

        <Container maxWidth="xl" sx={{ py:5 }} > 

            <Grid container spacing={{lg:'15', md:'15', xs:'20'}} 
                alignItems="center" justifyContent="center" direction="row">

                    {feed.map((data)=>(
                        <Grid item xs={12} md={4} lg={3.5} display="flex" 
                        alignItems="center" justifyContent="center">
                            <CardInfo image={data.pic}/>
                        </Grid>
                    ))}

            </Grid>

      </Container>

    );
};

export default Profile;