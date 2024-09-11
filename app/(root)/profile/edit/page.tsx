import Profile from '@/components/forms/Profile'
import { getQuestionById } from '@/lib/actions/question.action'
import { getUserById } from '@/lib/actions/user.action'
import { ParamsProps } from '@/types'
import { auth } from '@clerk/nextjs/server'

const Page = async ({ params }: ParamsProps) => {
    const { userId } = auth()

    if (!userId) return null;
    
    const mongoUser = await getUserById({ userId })

    return (
        <div>
            <h1 className='h1-bold text-dark100_light900'>Edit Profile</h1>
            
            <div className="mt-9">
                <Profile 
                    clerkId={userId} 
                    user={JSON.stringify(mongoUser)} 
                />
            </div>
        </div>
    )
}

export default Page