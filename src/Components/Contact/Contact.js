import React, { Fragment, Component } from 'react'
import { Grid, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Navbar from '../Navbar/Navbar';

const styles = {
    card: {
        margin: '1.5em',
        cursor: 'pointer'

    },
    grid: {
        marginTop: '20rem'
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Contact extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    // handleFb = () => {
    //     window.open("https://www.facebook.com/rocknegi69")
    // }
    render() {
        const { classes } = this.props;
        return (
            <Fragment >
                <Navbar />
                <Grid container className={classes.grid} >
                    <Grid item sm={4} md={4} xs={4}>
                        <Card raised={true} className={classes.card}>
                            <Typography variant="h1" align="center" onClick={this.handleClickOpen}>
                                <i className="fab fa-whatsapp"></i>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item sm={4} md={4} xs={4}>
                        <Card raised={true} className={classes.card}>
                            <Typography variant="h1" align="center" onClick={() => window.open("https://www.facebook.com/rocknegi69")}>
                                <i className="fab fa-facebook"></i>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item sm={4} md={4} xs={4}>
                        <Card raised={true} className={classes.card}>
                            <Typography variant="h1" align="center" onClick={()=>window.open("https://t.me/rocknegi69")}> 
                                <i className="fab fa-telegram"></i>
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >

                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" variant="h4">
                            Hit me up on +919958439858 Plz Dont Spam :P
                          </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.handleClose} color="secondary" size="large" variant="contained">
                            <strong>OK</strong>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment >
        )

    }


}

export default withStyles(styles)(Contact);
