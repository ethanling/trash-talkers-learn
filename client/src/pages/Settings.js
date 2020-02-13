import React from 'react';
import Button from '../components/Button'
import Modal from '../components/Modal';
import appAuth from '../authentication/config'



const Settings = ({ toggle, action }) => {

    const handleSignOut = () => {
        console.log("signed out");
        appAuth.auth().signOut();
    }

    return (
        <Modal toggle={toggle} action={action}>
            <Button action={ handleSignOut } text='Sign Out' />
        </Modal>
    );
}

export default Settings;