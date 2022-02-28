import { Grid, Container} from '@mui/material';
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
            name:"Hello World",
            pic:HelloWorld,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tincidunt sem. Duis vestibulum eros in diam tincidunt pharetra. Aliquam erat volutpat. Maecenas venenatis lobortis nunc, eget consectetur mauris maximus sed. Etiam sem sapien, mollis quis dictum et, porta auctor libero. Nulla nec rutrum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse hendrerit nulla ac nibh pellentesque convallis. Maecenas ullamcorper volutpat mauris sed rhoncus."
        },
        {
            name:"Start my journey",
            pic:PicGif,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tincidunt sem. Duis vestibulum eros in diam tincidunt pharetra. Aliquam erat volutpat. Maecenas venenatis lobortis nunc, eget consectetur mauris maximus sed. Etiam sem sapien, mollis quis dictum et, porta auctor libero. Nulla nec rutrum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse hendrerit nulla ac nibh pellentesque convallis. Maecenas ullamcorper volutpat mauris sed rhoncus."
        },
        {
            name:"A nice phrase",
            pic:Phrase,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tincidunt sem. Duis vestibulum eros in diam tincidunt pharetra. Aliquam erat volutpat. Maecenas venenatis lobortis nunc, eget consectetur mauris maximus sed. Etiam sem sapien, mollis quis dictum et, porta auctor libero. Nulla nec rutrum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse hendrerit nulla ac nibh pellentesque convallis. Maecenas ullamcorper volutpat mauris sed rhoncus."
        },
        {
            name:"<Coder Girl/>",
            pic:CoderGirl,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tincidunt sem. Duis vestibulum eros in diam tincidunt pharetra. Aliquam erat volutpat. Maecenas venenatis lobortis nunc, eget consectetur mauris maximus sed. Etiam sem sapien, mollis quis dictum et, porta auctor libero. Nulla nec rutrum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse hendrerit nulla ac nibh pellentesque convallis. Maecenas ullamcorper volutpat mauris sed rhoncus."
        },
        {
            name:"Pics about mee",
            pic:Pics,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tincidunt sem. Duis vestibulum eros in diam tincidunt pharetra. Aliquam erat volutpat. Maecenas venenatis lobortis nunc, eget consectetur mauris maximus sed. Etiam sem sapien, mollis quis dictum et, porta auctor libero. Nulla nec rutrum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse hendrerit nulla ac nibh pellentesque convallis. Maecenas ullamcorper volutpat mauris sed rhoncus."
        },
        {
            name:"What can i offer?",
            pic:MySkills,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tincidunt sem. Duis vestibulum eros in diam tincidunt pharetra. Aliquam erat volutpat. Maecenas venenatis lobortis nunc, eget consectetur mauris maximus sed. Etiam sem sapien, mollis quis dictum et, porta auctor libero. Nulla nec rutrum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse hendrerit nulla ac nibh pellentesque convallis. Maecenas ullamcorper volutpat mauris sed rhoncus."
        }
    ];

    return(

        <Container maxWidth="xl" sx={{ py:5 }} > 

            <Grid container spacing={{lg:'15', md:'15', xs:'20'}} 
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