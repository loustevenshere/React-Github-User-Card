import React from 'react';
import User from './User';

class UserList extends React.Component{

   
    render(){
        return(
            <div>
                {this.props.gitUsers.login}
                {/* {this.props.gitUsers.map(user => {
                        return (
                            <User key={user.id} user={user} login={user.login} />
                        )
                    
                    })
                } */}
            </div>
        )
    }
}

export default UserList;