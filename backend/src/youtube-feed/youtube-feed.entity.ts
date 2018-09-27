import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class YouTubeFeed {
    @PrimaryGeneratedColumn() id: number;

    @Column()
    etag: string;

    @Column()
    kind: string;

    @Column({ nullable: true })
    video_id: string;

    @Column({ nullable: true })
    playlist_idd: string;

    @Column()
    pub_date: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    channel_title: string;

    @Column({ type: 'simple-json' })
    thumbnails: string;

    @Column({ type: 'simple-json', nullable: true })
    statistics: string;
}
