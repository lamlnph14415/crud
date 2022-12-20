import React from "react"
import { Button } from "react-bootstrap";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            Login: false,
            token: null
        }
    }


    login() {
        console.warn("from data", this.state)
        fetch('https://63560758483f5d2df3bcf921.mockapi.io/Login', {
            method: "POST",
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                console.warn("result", result);

                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: result.token
                }))
                this.setState({ login: true })
            })
        })
    }

    render() {
        return (

            <div>
                {!this.state.Login ? <div>

                    <p>email</p>
                    <input type="Text" placeholder="Enter Name" onChange={(event) => { this.setState({ email: event.target.value }) }} />

                    <p>Password</p>
                    <input type="password" placeholder="Password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    <br />
                    <input type="checkbox" label="Nho mat khau" /> nho mat khau
                    <br />

                    <Button type="submit" onClick={() => { this.login() }}>
                        Login
                    </Button>

                </div>
                    :
                    <div>
                        <h1>hahaha</h1>
                    </div>
                }
            </div>

        )
    }


}

export default Login





















// ******************************* //




// import React, { useEffect, useState, } from "react"
// import { Form, Button } from "react-bootstrap";
// export default function Login(props) {
//     const [username, setUsername] = useState(null)
//     const [password, setPassword] = useState(null)
//     useEffect(() => {
//         console.info("TEST")
//         console.info(Math.random())
//     })


//     return (
//         <>
//             <Form>
//                 <Form.Group className="mb-3">
//                     <Form.Label>Name address</Form.Label>
//                     <LoginForm id="username" type="text" placeholder="Enter Name" field={username} change={event => setUsername(event.target.value)} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" >
//                     <Form.Label>Password</Form.Label>
//                     <LoginForm type="password" id="password" placeholder="Password" field={password} change={event => setPassword(event.target.value)} />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                     <Form.Check type="checkbox" label="Nho mat khau" />
//                 </Form.Group>
//                 <Button type="submit">
//                     Login
//                 </Button>
//             </Form>

//         </>
//     )
// }


// class LoginForm extends React.Component {
//     render() {
//         return (
//             <Form.Group className="mb-3" ControlId={this.props.id}>
//                 <Form.Label>{this.props.labe}</Form.Label>
//                 <Form.Control type={this.props.type} value={this.props.field}
//                     onChange={this.props.change} />


//             </Form.Group>
//         )
//     }
// }