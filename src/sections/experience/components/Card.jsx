import { Paragraph } from '../../../shared/components/Paragraph';
import { Subtitle } from '../../../shared/components/Subtitle';
import { Time } from './Time';

// eslint-disable-next-line react/prop-types
export function Card({ title, paragraph, image, time }) {
  return (
    <article className="mt-8 flex w-full flex-col items-center justify-between rounded-lg border-[1px] border-gray-200">
      <div className="flex w-full items-center justify-between gap-4 rounded-lg border-r-2 border-gray-200 bg-white px-4 py-4">
        <div className="mx-4 flex w-full flex-col gap-4 px-4">
          <div className="flex w-full items-center justify-between gap-4">
            <Subtitle color={'purple'}>{title}</Subtitle>
            <Time color={'rose'}>{time}</Time>
          </div>
          <Paragraph color={'dark'} size="sm">
            {paragraph}
          </Paragraph>
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </article>
  );
}
