import React, {useContext} from 'react';
import { Container } from 'react-bulma-components';
import UserDataContext from '../context/userdata';

function Profile(props) {

    const [userData, setUserData] = useContext(UserDataContext);

    return (
        <div>
           <Container>
              {userData.display_name}
           </Container>
        </div>
    )
}

export default Profile;
