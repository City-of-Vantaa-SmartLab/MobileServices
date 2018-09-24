import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class RssFeed {
    @PrimaryGeneratedColumn() id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    pubDate: string;

    @Column()
    content: string;

    @Column()
    source: string;

    @Column()
    guid: string;

    @Column()
    isoDate: string;
}
