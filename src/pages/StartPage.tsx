import { useQuery } from '@tanstack/react-query'
import { getStartStories } from '../services/hnAPI'
import ListLayout from '../components/list/ListLayout'

const StartPage = () => {

    const startStories = useQuery({
        queryKey: ['startStories'],
        queryFn: () => getStartStories('/search?tags=front_page')
    })

    console.log("Start stories: ", startStories.data?.hits)

    //Todo: Need the global loading icon!

    return ( 
        <div>
            StartPage
            { startStories.isFetched && <ListLayout data={startStories.data!.hits} /> }
        </div>
    )
}

export default StartPage