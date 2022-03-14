import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Grid, Tooltip } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5
}));

export default function Skills () {

    const data = [
        {
            name: 'HTML/CSS',
            value: 90   
        },
        {
            name: 'User Interface Design',
            value: 85   
        },
        {
            name: 'Java, PHP',
            value: 80   
        },
        {
            name: 'MySQL, PostgreSQL',
            value: 75   
        },
        {
            name: 'React, JS',
            value: 70   
        },
        {
            name: 'C#, C/C++',
            value: 65   
        },
    ];

    return(
        <div>

            <Grid container justifyContent={'center'} alignItems={'center'} spacing={1} mt={1}>

                {data.map((item) => (
                    <>
                        <Grid item xs={5} justifyContent={'center'}>
                            <div>{item.name}</div> 
                        </Grid>

                        <Grid item xs={7} justifyContent={'center'}>
                            <Tooltip title={item.value}>
                                <BorderLinearProgress variant="determinate" color="other2" value={item.value} /> 
                            </Tooltip>
                        </Grid>
                    </>
                ))}
                
            </Grid>

        </div>
    );
}