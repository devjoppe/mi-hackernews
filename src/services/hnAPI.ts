import axios from 'axios'
import { hnResponseInt } from '../interfaces/hnInterfaces.interface'

const instance = axios.create({
    baseURL: "https://hn.algolia.com/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

const get = async <T>(endpoint:string) => {
    const response = await instance.get(endpoint)

    return response.data as T
}

export const getStartStories = async (endpoint:string) => {
    return get<hnResponseInt>(endpoint)
}