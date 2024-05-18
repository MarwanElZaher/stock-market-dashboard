import React from "react"
import avatarIcon from '../../icons/profile-avatar.png'

function ProfileAvatar({ isExpanded, ...props }) {
    return (
        <div>
            {isExpanded ?
                <>
                    <img src={avatarIcon} alt="profileavatar" />
                    <div className='flex-1 ml-10'>
                        <p className='font-bold text-sm'>MoniRoy</p>
                        <p className='text-xs'>Beginner</p>
                    </div>
                </> : <img src={avatarIcon} alt="profileavatar" />}

        </div>
    )
}
export default ProfileAvatar    