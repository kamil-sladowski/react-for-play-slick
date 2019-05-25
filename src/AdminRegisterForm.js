import React, {Component} from 'react';

class AdminRegisterForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/admin_register/';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Admin name</label>
                <input id="name" name="name" type="text" />

                <label htmlFor="password">Admin password</label>
                <input id="password" name="password" type="password" />

                <label htmlFor="email">email</label>
                <input id="email" name="email" type="email" />

                <button>Register Admin</button>
            </form>
        );
    }

}


export default AdminRegisterForm;