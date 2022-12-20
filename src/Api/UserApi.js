import React from "react";

export default class UserApi extends React.Component {

    constructor() {
        super();
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                // console.warn(result.data)
                this.setState({ users: result.data })
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Feth API</h1>
                {
                    this.state.users ? this.state.users.map((item, i) =>
                        <div><p>
                            {i}---
                            {item.first_name}
                            {item.last_name}
                            ---
                            {item.last_name}
                        </p></div>

                    )
                        :
                        null
                }

            </div>
        )
    }


}
