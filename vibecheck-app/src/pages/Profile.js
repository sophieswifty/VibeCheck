import React, {useContext} from 'react';
import { Container, Button } from 'react-bulma-components';
import UserDataContext from '../context/userdata';
import axios from 'axios';

function Profile(props) {

    const [userData, setUserData] = useContext(UserDataContext);

    const deleteData = async() => {
        try {
            const result = await axios({
                method: 'GET',
                url: 'http://localhost:3030/playlists/all',
            });

            console.log(result.data);
        } catch (error) {
            return error;
        }
    }

    return (
        <div>
           <Container>
              {userData.display_name}
              <Button color="warning" onClick={deleteData}>Delete data</Button>
           </Container>
        </div>
    )
}

export default Profile;
