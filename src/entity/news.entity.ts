import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class News extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'Account.News_Region__c'})
    newsRegion: string;

    @Column({name:'Account.News_Source__c'})
    newsSource: string;
}
