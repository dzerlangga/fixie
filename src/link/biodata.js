import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import img from './logo.png';

class biodata extends Component{
    render(){
        return(
            <div style={{ width: '100%' , margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src={img} className="avatar-img" alt="logo" />
<div className="banner-text">
     <h1>
         Dandi Zusitama Erlangga
     </h1>
     <hr />
     <p>HTML/CSS | Bootstrap | JavaScript | React | DLL</p>
<div className="social-media">
<a href=""><i class="fab fa-facebook"></i></a>
<a href=""><i class="fab fa-instagram"></i></a>
<a href=""><i class="fab fa-github"></i></a>
<a href=""><i class="fab fa-whatsapp"></i></a>
</div>
</div>
                    </Cell>

                </Grid>
               
            </div>
        )
    }
}

export default biodata;