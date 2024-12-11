import { Loader } from 'lucide-react'

const loading = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Loader className='animate-spin size-4' />
        </div>
    )
}

export default loading