function ProfilePage({params}: any){
    return(
        <div className="flex justify-center items-center border-4 rounded-4xl w-1/2 min-h-screen m-auto flex-col">
            <div className="text-4xl ">
                Profile:
            </div>
            
            <div className="flex items-center">
                <span className="text-3xl">Hello, </span>
            <div className="items-center rounded-2xl bg-amber-500 p-3 text-3xl">
                {params.id}
            </div>
            </div>
        </div>
    )
}

export default ProfilePage;