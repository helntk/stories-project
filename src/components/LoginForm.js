import React from 'react'


export default function LoginForm({handleLogin, handleChange}) {
    return (
        <div>
            
            <div className='login-page__main__login'>
            
                 <form className='login-page__main__login__form'>
                  <input className='form-cadastro-item' onChange={handleChange} name='email' type='email' placeholder='Nome de usuário'></input>
                  <input className='form-cadastro-item' onChange={handleChange} name='password' type='password' placeholder='Senha'></input>
                   
               
                  <button onClick={handleLogin} className='btn-primary'>

                  Entrar
             
                
                     </button>
       
                
                </form>
               </div>

        </div>
    )
}
