import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import StoriesContainer from '../components/StoriesContainer';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/actions';
import {history } from '../utils/history'
class HomePage extends Component {
    
    logout = () =>{
     this.props.logoutUser(history)
    }
    render() {
        return (
            <div className='home-page'>

               <Navbar logout={this.logout} />
               <StoriesContainer />
             </div>
       
       
        )
            }
        }
const mapStateToProps = state =>{
  return  { 
      auth: state.auth
  }
}
        
export default connect(mapStateToProps, {logoutUser})(HomePage);