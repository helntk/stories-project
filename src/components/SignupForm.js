import React from 'react'


export default function SignupForm({handleSignup, handleChange}) {
    return (
        <div>
            <div className='login-page__main__cadastro'>

                 
            <h4>
                 Cadastre-se para ver<span className='br'><br></br></span> fotos e vídeos dos seus <span className='br'><br></br></span> amigos.
                 </h4> 

                 <form className='login-page__main__cadastro__form'>
                  <input className='form-cadastro-item' onChange={handleChange} name='email' type='email' placeholder='email'></input>
                  <input className='form-cadastro-item' onChange={handleChange} name='name' type='text' placeholder='Nome completo'></input>
                  <input className='form-cadastro-item' onChange={handleChange} name='userName' type='text' placeholder='Nome de usuário'></input>
                  <input className='form-cadastro-item' onChange={handleChange} name='password' type='password' placeholder='Senha'></input>
                 
                 <button onClick={handleSignup} className='btn-primary'>
                 Cadastrar-se

                 </button>
                
                 </form>
            </div>
        </div>
    )
}
