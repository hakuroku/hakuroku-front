type EpisodeContent = {
    pages: string[]
}

type EpisodeInfo = { 
    comic_id: number;
    comic_title: string;
    comic_thumnail: string;
    comic_url: string;
}[]

export type {EpisodeContent, EpisodeInfo }