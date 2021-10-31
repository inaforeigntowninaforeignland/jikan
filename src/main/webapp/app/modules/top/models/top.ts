import { Expose, Type } from 'class-transformer';

interface ITop {
  rank?: number;

  malId?: number;

  title?: string;

  url?: string;

  imageUrl?: string;

  type?: string;

  episodes?: number;

  startDate?: Date;

  endDate?: Date;

  members?: number;

  score?: number;
}

/**
 * Top items on MyAnimeList
 */
class Top implements ITop {
  /**
   * Rank
   */
  rank?: number;

  @Expose({ name: 'mal_id' })
  malId?: number;

  /**
   * Title
   */
  title?: string;

  /**
   * URL
   */
  url?: string;

  /**
   * Image URL
   */
  @Expose({ name: 'image_url' })
  imageUrl?: string;

  /**
   * Type
   */
  type?: string;

  episodes?: number;

  @Expose({ name: 'start_date' })
  @Type(() => Date)
  startDate?: Date;

  /**
   * End date
   */
  @Expose({ name: 'end_date' })
  @Type(() => Date)
  endDate?: Date;

  members?: number;

  score?: number;
}

export default Top;
