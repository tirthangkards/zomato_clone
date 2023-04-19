import React from 'react'


const Login = () => {

  return (

    <div className='row'>
        <div className="col-6 mx-auto mt-5">
            <h1>Login Form</h1>
            
            <label class="form-label" htmlFor="email">email: </label>
            <input type="text" className="form-control" name='email' id='email' placeholder='enter email' />
            <br />
            
            <label class="form-label" htmlFor="pass">Password: </label>
            <input type="password" className="form-control" name='passWord' id='pass' placeholder='enter password' />
            <br />

            <button className='btn btn-success btn-md'>Login</button>

        
        </div>
    </div>
  )
}

export default Login