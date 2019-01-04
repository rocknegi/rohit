import React, { Fragment, Component } from 'react'
import { Grid, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide';
import posed from "react-pose";

import Navbar from '../Navbar/Navbar';


const styles = {
    card: {
        margin: '1.5em',
        cursor: 'pointer'

    },

    box: {
        width: '130px',
        height: '135px',
        background: '#FAFAFA',
        margin: 'auto',
        content: 'hi'
    },

    sidebar: {
        width: '100%',
        height: '180px',
        background: '#795548',
        padding: '30px',
        display: 'flex',
        marginTop: '5px'
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const Box = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.15 },
    pressable: true,
    press: { scale: 0.8 },

});

const Sidebar = posed.ul({
    open: {
        x: '0%',
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: { x: '-100%', delay: 300 }
});


class Contact extends Component {
    state = {
        open: false,
        hovering: false,
        isOpen: false

    };
    componentDidMount() {
        setTimeout(this.toggle, 500);
    }
    toggle = () => this.setState({ isOpen: !this.state.isOpen });


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <Fragment >
                <Navbar />
                <Grid container>
                    <Grid item sm={12} md={12} xs={12}>
                        <Sidebar className={classes.sidebar} pose={this.state.isOpen ? 'open' : 'closed'} onClick={this.handleClickOpen}>

                            <Box className={classes.box}
                                pose={this.state.hovering ? "hovered" : "idle"}
                                onMouseEnter={() => this.setState({ hovering: true })}
                                onMouseLeave={() => this.setState({ hovering: false })}
                            >
                                <i className="fab fa-whatsapp" style={{ fontSize: '100px', margin: '22px' }} ></i>
                            </Box>
                        </Sidebar>


                        <Grid item md={12}>
                            <Sidebar className={classes.sidebar} pose={this.state.isOpen ? 'open' : 'closed'} onClick={() => window.open("https://www.facebook.com/rocknegi69")}>

                                <Box className={classes.box}
                                    pose={this.state.hovering ? "hovered" : "idle"}
                                    onMouseEnter={() => this.setState({ hovering: true })}
                                    onMouseLeave={() => this.setState({ hovering: false })}

                                >
                                    <i className="fab fa-facebook" style={{ fontSize: '100px', margin: '22px' }}></i>

                                </Box>
                            </Sidebar>
                        </Grid>
                        <Grid item md={12}>
                            <Sidebar className={classes.sidebar} pose={this.state.isOpen ? 'open' : 'closed'} onClick={() => window.open("https://t.me/rocknegi69")}>

                                <Box className={classes.box}
                                    pose={this.state.hovering ? "hovered" : "idle"}
                                    onMouseEnter={() => this.setState({ hovering: true })}
                                    onMouseLeave={() => this.setState({ hovering: false })}

                                >
                                    <i className="fab fa-telegram" style={{ fontSize: '100px', margin: '22px' }} ></i>
                                </Box>
                            </Sidebar>
                        </Grid>
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
                            <span>Hit me up on +919958439858.Plz Dont Spam <i className="far fa-grin-beam-sweat"></i></span>
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
