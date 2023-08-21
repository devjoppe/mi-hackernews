import { useQuery } from '@tanstack/react-query'
import { getStartStories } from '../services/hnAPI'
import ListLayout from '../components/list/ListLayout'
import {TabList, Tabs, Tab, TabPanels, TabPanel} from "@chakra-ui/react";

const StartPage = () => {

    const startStories = useQuery({
        queryKey: ['startStories'],
        queryFn: () => getStartStories('/search?tags=front_page')
    })

    return ( 
        <div>
            StartPage
            <Tabs variant="soft-rounded">
                <TabList>
                    <Tab>Recent</Tab>
                    <Tab>My Favorites</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        { startStories.isFetched && <ListLayout data={startStories.data!.hits} /> }
                    </TabPanel>
                    <TabPanel>
                        Favorites
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div>
    )
}

export default StartPage