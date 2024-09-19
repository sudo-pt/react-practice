export default function User(props) {
    const userRecord = props.userRecord;
    // console.log('user record', userRecord);
    return (
        <div className="flex">
            <div className="mr-4 flex-shrink-0 self-center">
                <svg
                    className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 200 200"
                    aria-hidden="true"
                >
                    <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0"/>
                </svg>
            </div>
            <div>
                <h4 className="text-lg font-bold">{userRecord.name}</h4>
                <p className="mt-1">Age: {userRecord.age}</p>
                <p>Email: {userRecord.email}</p>
                <p>Address: {userRecord.address}</p>
            </div>
        </div>
    )
}