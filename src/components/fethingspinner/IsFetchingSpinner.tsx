import { useIsFetching } from "@tanstack/react-query";
import {Spinner, Flex} from "@chakra-ui/react";

const isFetchingSpinner = () => {

    const isFetching = useIsFetching()

    return isFetching ? (
        <Flex flex="1" justifyContent="center">
            <Spinner />
        </Flex>
    ) : null
}

export default isFetchingSpinner