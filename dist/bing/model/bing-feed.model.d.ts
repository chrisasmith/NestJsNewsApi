export interface ImageThumbnail {
    contentUrl: string;
    width: number;
    height: number;
}
export interface FeedImage {
    thumbnail: ImageThumbnail;
}
export interface BingFeed {
    name: string;
    url: string;
    image: FeedImage;
    description: string;
    datePublished: string;
    category: string;
    headline: boolean;
}
