import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Flex, Heading, Text, IconButton, Link} from '@chakra-ui/react'
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { hnItemInt } from "../../interfaces/hnInterfaces.interface"

interface IProp {
    itemData: hnItemInt
}

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'full',
    timeStyle: 'short'
})

const isoToFormattedString = (isoDate: string) => {
    const date = new Date(isoDate)
    return dateFormatter.format(date)
}

const ListItem:React.FC<IProp> = ({itemData}) => {
    return(
        <Card mb="6">
            <CardHeader pb="0">
                <Flex flexDirection="row">
                    <Flex flex="1" alignItems="center">
                        <Link href={itemData.url} isExternal>
                            <Heading size='md'>{itemData.title}</Heading>
                        </Link>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='Add Favorite'
                        icon={<BsFillBookmarkStarFill />}
                    />
                </Flex>
            </CardHeader>
            <CardBody pb="0">
                <Text fontSize='md'>{itemData.points} points by {itemData.author} with {itemData.num_comments} comments</Text>
            </CardBody>
            <CardFooter>
                <Text fontSize="sm">
                    {isoToFormattedString(itemData.created_at)}
                </Text>
            </CardFooter>
        </Card>
    )
}

export default ListItem