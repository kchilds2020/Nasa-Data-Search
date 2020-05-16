import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';


export default function Post(props){
    return (
       <div className='feed'>
         <Paper className='paper' elevation={3}>
         <img src={props.imgLocation} alt="boohoo" className="img-responsive"/>
           <Typography className="itemTitle" variant='h4' >
           {props.title}
           </Typography>
           <Typography component={'span'} variant={'body1'}>
           <span>{props.body}</span>
           </Typography>
         </Paper>
       </div>
    );
 }