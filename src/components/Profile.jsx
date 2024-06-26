import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    isLoading && (<div>Loading...</div>)

    return (
        isAuthenticated && (
            <div className='mx-1 md:mx-4'>
                <img src={user.picture} alt={user.name} className='w-10 h-10 sm:w-20 sm:h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'/>
                {/* <h1> {user.name} </h1> */}
                {/* <p> {user.email} </p> */}
            </div>
        )
    )
}

export default Profile;