import { SearchParamsProps } from '@/types';
import QuestionCard from '../cards/QuestionCard';
import { getUserQuestions } from '@/lib/actions/user.action';

interface Props extends SearchParamsProps {
    userId: string;
    clerkId?: string;
}

const QuestionTab = async ({ searchParams, userId, clerkId }: Props) => {
    const result = await getUserQuestions({
        userId,
        page: 1
    })

    return (
        <>
            {result.questions.map((question: any) => {
                return (
                    <QuestionCard 
                        key={question._id}
                        _id={question._id}
                        clerkId={clerkId}
                        title={question.title}
                        tags={question.tags}
                        author={question.author}
                        upvotes={question.upvotes}
                        views={question.views}
                        answers={question.answers}
                        createdAt={question.createdAt}
                    />
                );
            })}
        </>
    )
}

export default QuestionTab