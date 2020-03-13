import { Repository } from "typeorm";
import { News } from "../entity/news.enity";
export declare class WeatherRepository extends Repository<News> {
    getURL(): Promise<News>;
}
