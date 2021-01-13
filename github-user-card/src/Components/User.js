import userEvent from '@testing-library/user-event';
import React from 'react';

class User extends React.Component{

    render(){
        return(
            <div>
                {/* props.user/ props.gitUsers */}
                {/* <img src={this.props.user.avatar_url} alt='User avatar' /> */}
                Login: {this.props.user.login}

            </div>
        )
    }
};

export default User;