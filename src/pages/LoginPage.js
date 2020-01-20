import React, { Component } from 'react'
import logo from '../imgs/insta-logo.png';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import {createUser,loginUser} from '../redux/actions/actions';
import {history} from '../utils/history';

class  LoginPage extends Component{

 
    state = {
      signUp: true,
      user:{
        name: '',
        password: '',
        email: '',
        userName: ''
      },
      login:{
        email: '',
        password: ''
      }
    }

    componentWillMount(){
      if(this.props.auth.authenticated){
        history.push('/home')
      }
    }

    handleSignup = (e) =>{
      e.preventDefault()
      this.props.createUser(this.state.user, history)
      this.setState({
        signUp: false
      })
    }

    handleLogin = (e) =>{
      e.preventDefault()
      this.props.loginUser(this.state.login, history)
    }

    handleChange2 = e =>{     
      let myValue = e.target.value; 
      let myName = e.target.name;      
      this.setState(prevState => ({
        login: {
         ...prevState.login,
         [myName] : myValue
        }
      } 
      
      ));
    }
     
  handleChange = e =>{     
    let myValue = e.target.value; 
    let myName = e.target.name;      
    this.setState(prevState => ({
      user: {
       ...prevState.user,
       [myName] : myValue
      }
    } 
    
    ));
  }
   

    TextHandler = e =>{
       e.preventDefault();
       this.setState( prevState =>({
           signUp: !prevState.signUp
       }))
    }

    render(){
    let Form;
    let TextForm;


     //conditional rendering form

    if(this.state.signUp)
    {
      Form = (<SignupForm handleChange={this.handleChange} handleSignup={this.handleSignup} />);
    }
    else 
    {
      Form =  (<LoginForm  handleChange={this.handleChange2} handleLogin={this.handleLogin} />);
    }


    //conditional rendering text below
    if(this.state.signUp)
    {
     TextForm = ( <h5>
     Tem uma conta? <a href='#' onClick={this.TextHandler}>Conecte-se</a>
     </h5>)
    }

    else 
    {
     TextForm = ( <h5>
        Não tem uma conta? <a href='#' onClick={this.TextHandler} >Cadastre-se</a>
        </h5> 
        )
    }
    return (
        <div className='login-page'>

           <div className='login-page__img'>
             <img src={'https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'} alt='instagram promo' />
           </div>

            <div className='login-page__main'>
               
               <div className='login-page__main__logo'> 
                <img  src={logo} alt='logo instagram' />
               </div>
                 {Form}
                {TextForm}

            
            </div>
          
        </div>
    )
    }
}
function mapStateToProps(state){
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps,{createUser,loginUser})(LoginPage);