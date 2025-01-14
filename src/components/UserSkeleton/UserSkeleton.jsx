import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserSkeleton = () => {
    return (
        <div className="user-skeleton">
            <Skeleton />
        </div>
    )
}

export default UserSkeleton