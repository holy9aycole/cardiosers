import { Grid } from '@mui/material'
import React from 'react'
import email from 'assets/icons/email.svg';
import location from 'assets/icons/location.svg';
import password from 'assets/icons/password.svg';
import phone from 'assets/icons/phone.svg';
import user from 'assets/icons/user.svg';
import edit from 'assets/icons/edit.svg';
import { Circle, Icon, Text, FormField, GridStyle, Edit, EditMobile, GridItem } from './styles'

function ProfileForm() {
    return (
        <GridStyle container spacing={2}>
            <Grid item md={12} xs={12}>
                <Edit src={edit} />
            </Grid>
            <GridItem item md={6} xs={12} style={{}}>
                <FormField>
                    <Circle>
                        <Icon src={email} />
                    </Circle>
                    <Text>Sanya Arora</Text>
                </FormField>
                <EditMobile src={edit} />
            </GridItem>
            <GridItem item md={6} xs={12}>
                <FormField>
                    <Circle>
                        <Icon src={location} />
                    </Circle>
                    <Text>Bengaluru, IN</Text>
                </FormField>
                <EditMobile src={edit} />
            </GridItem>
            <GridItem item md={6} xs={12}>
                <FormField>
                    <Circle>
                        <Icon src={password} />
                    </Circle>
                    <Text>sanya@morph.com</Text>
                </FormField>
                <EditMobile src={edit} />
            </GridItem>
            <GridItem item md={6} xs={12}>
                <FormField>
                    <Circle>
                        <Icon src={phone} />
                    </Circle>
                    <Text>+91 12345 67890</Text>
                </FormField>
                <EditMobile src={edit} />
            </GridItem>
            <GridItem item md={6} xs={12}>
                <FormField>
                    <Circle>
                        <Icon src={user} />
                    </Circle>
                    <Text>*********</Text>
                </FormField>
                <EditMobile src={edit} />
            </GridItem>
        </GridStyle >
    )
}

export default ProfileForm
