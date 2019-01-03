import React, { Component, Fragment } from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar/Navbar';

const styles = {
}

class Home extends Component {
    componentDidMount() {
        this.props.history.push('/Home');
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Navbar />
                
            </Fragment>

        )
    }
}

export default withStyles(styles)(Home);