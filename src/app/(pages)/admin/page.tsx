import { Button } from '@/components/ui/button'
import CreateCourse from '@/sections/admin/CreateCourse'
import Link from 'next/link'
import React from 'react'

const AdminPage = () => {
    return (
        <div className='h-screen gap-10 w-screen flex-col flex items-center justify-center text-2xl font-semibold text-blue-600 mx-auto'>
            Admin Page
            //Pending

            <Button
                asChild
            >
                <Link

                    href="/admin/create">
                    Create Career
                </Link>
            </Button>

        </div>
    )
}

export default AdminPage