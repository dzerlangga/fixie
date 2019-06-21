import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import gmb from '../main-visual.jpg';
import gmb1 from '../Sepedah.jpeg';
import img from './logo.png';
import img1 from './section-footer_purple.svg';

class biodata extends Component{
    render(){
        return(
            <div>
            <Grid className="landing-grid">

            
            <Cell col={5}>
            <h1 className="text">
            <p className="transbox"> <button className="btn btn-primary" style={{ paddingTop:"50px", width:"5px", height:"50px" , paddingLeft:"0px" , paddingRight:"0px"}}></button> </p>
            <div className="sos">
            <i class="fab fa-facebook-f"></i>
            <br />
            <i class="fab fa-twitter"></i>
            <br />
            <i class="fab fa-google-plus-g"></i>
            </div>
            <p className="bike">BIKE FIXIE</p>
            <Cell col={12} className="lorem" >dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</Cell>   

            <Cell col={12} className="harga" >
            <p className="ukuran">$ 899.350</p>
            </Cell>


            <Cell col={12} className="button-active" >
            <button className="btn btn-primary button"><p className="button-pay">PAY FOR > </p></button>
            </Cell>

            <Cell col={12} className="spek" >
            <Grid>
            <Cell col={3} className="" ><p className="line">26 Inches</p></Cell>
            <Cell col={3} className="" ><p className="line">60 knfe</p></Cell>
            <Cell col={3} className="" ><p className="line">30 Speed</p></Cell>
            </Grid>
            </Cell>

            </h1>
            </Cell>

            <Cell col={7}><img src={gmb1} className="logo-sepedah" /></Cell>
            <div class="gui gui-pagination">
            <a style={{ color:'#ffff' , opacity:"0.9"}} href="#home">01 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.6"}} href="#services">02 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.5"}} href="#school">03 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.4"}} href="#about">04 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.3"}} href="#partners">05 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.3"}} href="#career">06 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.2"}} href="#contacts">07 <i style={{ color:'#014061' }} class="far fa-circle"></i></a>
            <a style={{ color:'#ffff' , opacity:"0.1"}} href="#next-section"><span></span></a>

            </div>
            </Grid>



            </div>
            )
    }
}

export default biodata;