import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function DialogProject(props) {

    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <div>
            <Dialog
            open={props.status}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {/* <DialogTitle style={{marginTop: '10px'}} id="alert-dialog-title">
             {"FEATURE IN PROGRESS"}
            </DialogTitle> */}

            <DialogContent>

                 <Box
                    noValidate
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                    marginTop: '5px'
                    }}
                >
                    <ReportProblemIcon style={{fontSize: "50px", margin: "10px"}} color="warning"/>

                </Box>

                <DialogContentText marginBottom="-10px">
                    <strong>Feature in progress.</strong> Sorry for the inconvenience, it will be up and running soon. 
                    In the meanwhile, I invite you to explore my website😊❤
                </DialogContentText>

            </DialogContent>

            

            <DialogActions style={{marginBottom: '10px', marginRight:'15px'}}>
                <Button size="medium" onClick={handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>
        </div>
    );
};