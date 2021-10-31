import { Expose, Type } from 'class-transformer';

import ITopDetail from './top-detail';

abstract class AbstractTopDetail implements ITopDetail {
  rank: number;

  @Expose({ name: 'mal_id' })
  malId: number;

  title: string;

  url: string;

  @Expose({ name: 'image_url' })
  imageUrl: string;

  type: string;

  @Expose({ name: 'start_date' })
  @Type(() => Date)
  startDate: Date;

  @Expose({ name: 'end_date' })
  @Type(() => Date)
  endDate: Date;

  members: number;

  score: number;
}

export default AbstractTopDetail;
