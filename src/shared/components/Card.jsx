import { Paragraph } from './Paragraph';
import { Subtitle } from './Subtitle';

// eslint-disable-next-line react/prop-types
export function Card({ title, paragraph, image }) {
  return (
    <article className="mt-8 flex w-full items-center justify-between rounded-lg border-[1px] border-gray-200">
      <div className="mx-4 flex w-full flex-col gap-4 px-4">
        <Subtitle color={'purple'}>{title}</Subtitle>
        <Paragraph color={'dark'}>{paragraph}</Paragraph>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </article>
  );
}
