import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Heading, Text, IconButton} from '@chakra-ui/react'
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { hnItemInt } from "../../interfaces/hnInterfaces.interface"

interface Iprop {
    itemData: hnItemInt
}

const ListItem:React.FC<Iprop> = ({itemData}) => {
    return(
        <Card mb="6">
            <CardHeader>
                <Flex>
                    <Box flex='1'>
                        <Heading mb="2" size='sm'>{itemData.title}</Heading>
                    </Box>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsFillBookmarkStarFill />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text fontSize='sm'>{itemData.points} points by {itemData.author} with {itemData.num_comments} comments</Text>
            </CardBody>
        </Card>
    )
}

export default ListItem