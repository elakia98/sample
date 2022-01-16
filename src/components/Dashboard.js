import React from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./Dashboard.css"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Dashboard = ({auth:{user}}) =>{
    console.log(user)
    return(

            <div style={{marginTop:"5rem",textAlign:"center"}}>
                 <Container fluid>
                 <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} md={3}>
                        <Card >
                            <CardMedia
                                component="img"
                                width="200"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="Display Picture"
                            />
                            <CardContent style={{'textAlign': 'left'}}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {user && user.staffName.toUpperCase()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {user && user._id}
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={9} md={9}>
                            <table>
                                <tr>
                                    <td>Username</td>
                                    <td>Ajith</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>ajithk@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Registration Number</td>
                                    <td>123456  </td>
                                </tr>
                                <tr>
                                    <td>Joining Year</td>
                                    <td>2017</td>
                                </tr>
                                <tr>
                                    <td>Department</td>
                                    <td>CSE</td>
                                </tr>
                                <tr>
                                    <td>phone Number</td>
                                    <td>8300048002</td>
                                </tr>

                            </table>
                        </Grid>
                       
                    </Grid>
                 </Box>
                 </Container>
                {/* <h1>Welcome,{user && user.staffName}</h1> */}
            </div>
       
    )
}

Dashboard.propTypes={
    auth:propTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth
})

export default connect(mapStateToProps)(Dashboard);