/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Layout, Text} from '@ui-kitten/components';

function ProfileScreen({navigation}) {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1'>Profile</Text>
        </Layout>
    );
}

export default ProfileScreen;
