import React, { useRef, useEffect } from 'react'
import { useOutletContext, useLocation, Link, useNavigate, useNavigation } from 'react-router-dom'
export default function Popup(props) {
    const popupRef = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                props.onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef, props]);
    const { state: { user, usersData: { users } } } = props.users

    const usersElement = users.filter((elem) => elem.id !== user.id).map((e) => (
        <Link to={`/profile/${e.id}`} state={{
            user: e,
            usersData: { users }
        }}
            key={e.id}
        >
            <div className="user-details" >
                <img src={e.profilepicture} alt="" className='user-image' />

                <p className='popuser-name'>{e.name}</p>
            </div>
        </Link>))

    const signOutUser = () => {
        navigate('/')
    }
    return (
        <>
            <div className="popup-container" ref={popupRef}>
                <img src={user.profilepicture} alt="usersPic" className='popup-picture' />
                <h3 className='h3-black semi-bold'>{user.name}</h3>
                <p>{user.email}</p>
                <div className='line'></div>
                <div className='popup-users'>
                    {usersElement}
                </div>
                <button className='button' onClick={signOutUser}>Sign Out</button>
            </div>
        </>
    )
}
