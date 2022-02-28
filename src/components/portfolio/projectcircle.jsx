import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Button from '@mui/material/Button';
import { fontSize } from '@mui/system';
export default function CircleProject (props) {

    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

  return(
      <div>
        <div style={{textAlign: 'center', marginInline: '0px'}}>
            <img
                    className="imgIcons"
                    src={props.image}
                    alt="imagen de prueba"
                    onClick={handleClickOpen}
                />
        {/* <Typography variant="overline" display="block" xs={{fontSize:'0px'}} gutterBottom>
            {props.name}
        </Typography> */}
        </div>

        <Dialog
            open={open}
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
                    <strong>{props.name}</strong>
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