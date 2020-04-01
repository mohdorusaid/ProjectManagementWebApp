import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProjectList from './components/projects/ProjectList';
import ProjectDashboard from './components/projects/ProjectDashboard';
import CreateProject from './components/projects/CreateProject';
import SignInAsync from './components/auth/SignInAsync';
import MessageBoard from './components/projects/MessageBoard';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignInAsync}/>
        <Route exact path='/projects' component={ProjectList}/>
        <Route exact path='/projects/:id' component={ProjectDashboard}/>
        <Route exact path="/createProject" component={CreateProject}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
