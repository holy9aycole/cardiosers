import React from 'react'
import Dp from 'assets/images/sanya.png'
import camera from 'assets/images/camera-icon.png'
import { ProfileBackground, SmallAvatar, DisplayPic, BadgeStyle, LogOut } from './styles'
import ProfileForm from './ProfileForm'

function Profile() {
    return (
        <>
            <ProfileBackground>
                <BadgeStyle
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <SmallAvatar alt="Edit" src={camera} />
                    }
                >
                    <DisplayPic alt="Sanya" src={Dp} />
                </BadgeStyle>
            </ProfileBackground>
            <ProfileForm />
            <LogOut disableRipple>LOG OUT</LogOut>
        </>
    )
}

export default Profile
