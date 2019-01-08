import React, { Component, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Home.css'
import Navbar from '../Navbar/Navbar';
import img from '../../assets/bg4.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';

const styles = {
    root: {
        backgroundImage: `url(${img})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        position: 'absolute'
    },
    text: {
        fontSize: '50px',
        color: '#FFEBEE',
        padding: '3%',
        fontWeight: 'bold',
        marginTop: '30px'

    },

    carousel: {
        marginTop: '0%',
        height: '10%'

    }
}

class Home extends Component {
    componentDidMount() {
        this.props.history.push('/Home');
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Grid container className={classes.root}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Navbar nav="navbar navbar-fixed-top  navbar-light bg-light" />
                    </Grid>
                    <Grid item sm={12} md={12} xs={12}>
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img src={img} alt="Los Angeles" />
                                    <div className="carousel-caption">
                                        <span> Hello!! Welcome to my site.<i className="far fa-grin-beam"></i></span>
                                    </div>
                                </div>

                                <div class="item">
                                    <img src={bg2} alt="Chicago" />
                                    <div className="carousel-caption">
                                        The site is wholly built with reactJS.
                                    </div>

                                </div>

                                <div class="item">
                                    <img src={bg3} alt="New York" />
                                    <div className="carousel-caption">

                                        Contact Me if you find  any bugs or have some work for me
                                        </div>
                                </div>
                            </div>

                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                    </Grid>
                </Grid>
            </Fragment>


        )
    }
}

export default withStyles(styles)(Home);