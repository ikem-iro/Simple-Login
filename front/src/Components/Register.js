import React, {useState, useEffect} from 'react'

const Register = ({ login }) => {
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        cpassword: ""
    })
    const url = "https://localhost/4000/register"

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
            axios.post(url)
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                        <label htmlFor='firstName'>First Name</label>
                        <input type="text" name="firstName" id='firstName' onChange={handleChange} value={users.firstName} placeholder="Enter First Name"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type="text" name="lastName" id='lastName' onChange={handleChange} value={users.lastName} placeholder="Enter Last Name"/>
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