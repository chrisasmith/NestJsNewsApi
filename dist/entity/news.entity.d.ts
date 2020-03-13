import { BaseEntity } from "typeorm";
export declare class News extends BaseEntity {
    id: number;
    newsRegion: string;
    newsSource: string;
}
