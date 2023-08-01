import React from 'react';
import AboutTitle from '../aboutTitle';
import { Activity, Career } from '@/src/type';
import { Link2Icon } from '@radix-ui/react-icons';
import * as S from './styled';

type TimestampsProps = {
  title: string;
  timestamps: (Career | Activity)[];
};

const Timestamps: React.FC<TimestampsProps> = ({ title, timestamps }) => {
  if (!timestamps || timestamps.length < 2) return null;

  return (
    <S.Wrapper>
      <AboutTitle title={title} />
      <S.Content>
        {timestamps.map((timestamp, index) => (
          <S.Timestamp key={index}>
            <S.Date>{timestamp.date}</S.Date>
            <div>
              <S.Title>
                <S.TitleEn>{timestamp.en}</S.TitleEn>
                <S.TitleKr>{timestamp.kr}</S.TitleKr>
                {'link' in timestamp && timestamp.link && (
                  <a href={timestamp.link}>
                    <Link2Icon />
                  </a>
                )}
              </S.Title>
              <S.Info>{timestamp.info}</S.Info>
            </div>
          </S.Timestamp>
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default Timestamps;