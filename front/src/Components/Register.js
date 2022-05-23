import React, {useState, useEffect} from 'react'

const Register = ({ login }) => {
    const [users, setUsers] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        cpassword: ""
    })

    const handleChange =(e) => {
        const {name, value} = e.target
        setUsers(users => {
            return{
                ...users,
            [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users)
        if(users.password === users.cpassword){
            console.log("Valid Connection")
            login(true)
        }else{
            console.log("Bad Connection")
            login(false)
        }
    }
  return (
    <div className='body'>
        <div className='register'>
            <h2>Sign-Up Form </h2>
            <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input type="text" name="name" id='name' onChange={handleChange} value={users.name} placeholder="Enter Full Name"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input type="email" name="email"id='email' onChange={handleChange} value={users.email} placeholder="Enter Email Address"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='username'>UserName</label>
                        <input type="text" name="username" id='username' onChange={handleChange} value={users.username} placeholder="Enter User Name"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id='password' onChange={handleChange} value={users.password} placeholder="Enter Password"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input type="password" name="cpassword" id='cpassword' onChange={handleChange} value={users.cpassword} placeholder="Confirm Password"/>
                    </div>
                    <button>Submit</button>
            </form> 
        </div>
    </div>
  )
}

export default Register