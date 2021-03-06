import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Paper } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';

const styles = {
    card: {
        maxWidth: 300,
        margin: '20px auto 20px auto',
        maxHeight: '120rem',

    },
    cardMedia: {
        height: 350,
        width: 300,
    },
    bgColor: {
        backgroundColor: '#1b1b1b',
        border: '2px #f44336 solid',
        textAlign: 'center',
        color: '#ffffff'
    }
}

const About = (props) => {
    const { classes } = props;

    return (
        <Fragment>

            <div style={{ backgroundColor: '#1b1b1b' }}>
                <Navbar nav="navbar navbar-fixed-top  navbar-default" />
                <Grid container justify="center" >

                    <Grid item xs={12} sm={6} md={4} style={{ marginTop: '3%' }}>
                        <Card className={classes.card} raised={true}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/BN0MJ3H.jpg" title="MyPic"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="center">
                                        Rohit Singh Negi
                                  </Typography>
                                    <Typography component="p" variant="h5" align="center">
                                        21 years old,
                                    <strong>Web Developer</strong> <br></br>
                                        I am currently pursuing my B.Tech Final year in Information And Techonology.


                                </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                </Grid>
                <Paper elevation={2} className={classes.bgColor}>
                    <Typography variant="h3" component="h3" color="inherit" >
                        Education
        </Typography>
                </Paper>
                <Grid container spacing={0} justify="center">

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card} raised={true} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/jhrWl7e.jpg" title="NIEC"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="center">
                                        NIEC (GGSIPU) <br></br>

                                    </Typography>
                                    <Typography component="p" variant="h5" align="center">
                                        Btech (IT) <br></br>
                                        2015-2019
                                </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card} raised={true} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/O0i7zZS.jpg" title="KV"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="center">
                                        KV Sector 3 Rohini
                                  </Typography>
                                    <Typography component="p" variant="h5" align="center">
                                        10th,11th,12th <br></br>
                                        2012-2015
                                </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                </Grid>
            </div >
        </Fragment>
    )

}
export default withStyles(styles)(About);


