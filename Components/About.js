/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Layout, Text} from '@ui-kitten/components';

function AboutScreen({navigation}) {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1'>About</Text>
        </Layout>
    );
}

export default AboutScreen;