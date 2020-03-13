import {EntityRepository, Repository} from "typeorm";
import {News} from "../entity/news.entity";

@EntityRepository(News)
export class NewsRepository extends Repository<News> {

}
