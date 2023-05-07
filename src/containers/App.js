import React, {Fragment,Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import 'tachyons';


class App extends Component{
	constructor(){
		super()
		this.state ={
			robots:[],
	        searchField:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots:users}))
	}
  onSearchChange = (event) => {
  	this.setState({searchField:event.target.value});
  
  }
	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot=>{
  	return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
		return !robots.length ? <h1 className='tc f1'>Loading your app if you haven't internet it will not load!</h1>
		
		:(
             <>
             <div className='tc'>
             <h1 className='f1'>ROBOFRIENDS</h1>
             <SearchBox searchchange={this.onSearchChange} />
            <Scroll>
           <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
		     </div>
           </>
		)
	
	}
} 
	


export default App;