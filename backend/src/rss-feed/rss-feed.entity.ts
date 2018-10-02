import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class RssFeed {
    @PrimaryGeneratedColumn() id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    pub_date: string;

    @Column()
    content: string;

    @Column()
    source: string;

    @Column()
    guid: string;

    @Column()
    iso_date: string;
}
