import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return(
            <div className="Contact">
                <form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" />
                    </div>

                    <button>Submit Form</button>
                </form>
            </div>
        );
    }
}

export default Contact