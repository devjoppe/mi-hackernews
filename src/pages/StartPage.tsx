import { useQuery } from '@tanstack/react-query'
import { getStartStories } from '../services/hnAPI'

const StartPage = () => {

    const startStories = useQuery({
        queryKey: ['startStories'],
        queryFn: () => getStartStories('/search?tags=front_page')
    })

    console.log("Start stories: ", startStories.data?.hits)

    return ( 
        <div>
            StartPage
        </div>
    )
}

export default StartPage