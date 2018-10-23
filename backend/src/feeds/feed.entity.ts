import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class Feed {
    @PrimaryGeneratedColumn() id: number;

    @Column({ nullable: true })
    author: string;

    @Column({ nullable: true })
    author_thumbnail: string;

    @Column({ nullable: true })
    screen_name: string;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    page_link: string;

    @Column()
    description: string;

    @Column()
    source: string;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    image_url: string;

    @Column()
    pub_date: Date;

    @Column({ nullable: true })
    likes: number;

    @Column({ nullable: true })
    start_date: Date;

    @Column({ nullable: true })
    end_date: Date;

    @Column({ nullable: true })
    views: number;

    @Column({ nullable: true })
    location: string;

    @Column({ nullable: true })
    video_id: string;

    @Column({ nullable: true })
    feed_id: string;
}
