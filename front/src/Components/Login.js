import React, {useState} from 'react'

const Login = ({ login }) => {
    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginUser(loginUser => {
            return {
                ...loginUser,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginUser)
        login(true)
    }
  return (
    <div className='body'>
        <div className='login'>
            <h2>Sign-Up Form </h2>
            <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>UserName</label>
                        <input type="text" name="username" id='username' onChange={handleChange} value={loginUser.username} placeholder="Enter User Name"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id='password' onChange={handleChange} value={loginUser.password} placeholder="Enter Password"/>
                    </div>
                    <button>Submit</button>
            </form> 
        </div>
    </div>
  )
}

export default Login