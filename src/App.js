import React , { Component } from 'react';
import { Layout , Header , Navigation , Drawer ,Content , Grid ,Cell,Textfield} from 'react-mdl';
import gmb from './main-visual.jpg';
import gmb1 from './sepedah.png';
import Main from './link/main';
import { Link } from 'react-router-dom';
import './App.css';


class App extends Component {
 render(){
    return (
        <div className="demo-big-content">
        <img src={gmb1} className="sepedah" />
        <Navigation className="tombol">
        <Link className="logo" style={{ color:'#ffff' }} to="/keahlian" ></Link>
        <Link className="jarak" style={{ color:'#ffff' }} to="/keahlian" ><h5>HOME</h5></Link>
        <Link className="jarak" style={{ color:'#ffff' }} to="/contact" ><h5>BECYCLE</h5></Link>
        <Link className="jarak" style={{ color:'#ffff' }} to="/contact" ><h5>EQUIP</h5></Link>
        <Link className="jarak" style={{ color:'#ffff' }} to="/contact" ><h5>DEALER</h5></Link>
        <Link className="jarak" style={{ color:'#ffff' }} to="/contact" ><h5>CLUB</h5></Link>
        </Navigation>
        <p className="search" ><i class="fas fa-search"></i></p>
        <p className="bell" ><i class="fas fa-bell"></i></p>
        



        <Main />


        </div>

        );
    }
}

export default App;
