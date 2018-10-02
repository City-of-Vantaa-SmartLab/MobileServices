import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class FacebookFeed {
    @PrimaryGeneratedColumn() id: number;

    @Column()
    feed_id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({ nullable: true })
    picture: string;

    @Column()
    pub_date: string;

    @Column()
    status_type: string;

    @Column()
    type: string;

    @Column()
    source: string;

    @Column({ type: 'simple-json', nullable: true })
    comments: string;

    @Column({ type: 'simple-json', nullable: true })
    reactions: string;

    @Column({ type: 'simple-json', nullable: true })
    place: string;

    @Column({ type: 'simple-json', nullable: true })
    story_tags: string;
}
