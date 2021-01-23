import {
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
  import Message from './Message'




function Messages(){
    return (
        <div>
            <h1>This is my Messages Page</h1>
        <ul>
            <li key="1"><Link to='/messages/1'>Message Number - 1 </Link></li>
            <li key="2"><Link to='/messages/2'>Message Number - 2 </Link></li>
            <li key="3"><Link to='/messages/3'>Message Number - 3 </Link></li>
        </ul>
        <Switch>
            <Route path='/messages/:id' component={Message}/>
        </Switch>
        </div>
    )
}


export default Messages