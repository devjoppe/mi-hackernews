import {Input, Button, Flex} from '@chakra-ui/react'
import {BsSearch} from "react-icons/bs";

const SearchField = () => {
    return(
        <div>
            SEARCHFIELD
            <form>
                <Flex>
                    <Input mr="2" placeholder="Search with keyword or title" size="lg" />
                    <Button size="lg"><BsSearch /></Button>
                </Flex>
            </form>
        </div>
    )
}

export default SearchField