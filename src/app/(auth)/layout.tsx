

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="bg-neutral-950 text-white">
            {children}
        </div>
    )
}

export default AuthLayout