export interface hnItemInt {
    created_at: string
	title: string
	url: string
	author: string
	points: number
	story_text: string|null
	comment_text: string|null
	num_comments: number
	created_at_i: number
	objectID: string
}

export interface hnResponseInt {
    hits: hnItemInt[]
	nbHits: number
	page: number
	nbPages: number
	hitsPerPage: number
}
