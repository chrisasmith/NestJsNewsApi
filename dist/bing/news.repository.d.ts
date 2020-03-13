import { Repository } from "typeorm";
import { News } from "../entity/news.enity";
export declare class NewsRepository extends Repository<News> {
    private logger;
    getNews(url: string, key: string): Promise<News | any>;
}
