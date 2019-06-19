import React , { Component } from 'react';
import { Layout , Header , Navigation , Drawer ,Content } from 'react-mdl';
import Main from './link/main';
import { Link } from 'react-router-dom';
import './App.css';


class App extends Component {
 render(){
    return (
        <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
                <Link className="link" to="/">back</Link>
                <Link to="/contac">contac</Link>
                <Link to="/keahlian">keahlian</Link>
                <Link to="/">Link</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
