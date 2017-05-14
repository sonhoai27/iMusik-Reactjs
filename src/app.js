import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import MenuBar from "./components/header/nav-menu"
import $ from 'jquery'
import Banner from "./components/header/banner"
import SingerRandom from "./components/Singer/SingerRan"
import Hot from "./components/Hot/hot"
import Discover from "./components/Discover/Discover"
import Player from "./components/Player/player"

class App extends Component {
    render(){
        return (
            <div>
               <MenuBar/>
               <Banner/>
               <SingerRandom/>
               <Hot/>
               <Discover/>
               <Player/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);