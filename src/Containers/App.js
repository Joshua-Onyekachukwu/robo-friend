import React, { Component } from 'react';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import './App.css'
import Scroll from "../Components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(user => this.setState({ robots: user }))

    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );

        if (this.state.robots.length === 0) {
            return <h1>Loading Robots</h1>
        } else {
            return (
                <div className={'tc pt4'}>
                    <h1 className={'f1'}>Robo Friends</h1>

                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
