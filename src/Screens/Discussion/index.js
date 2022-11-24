import React from 'react';
import DiscussionCard from 'components/DiscussionCard';
import { useParams } from 'react-router';
import useForum from 'hooks/useForum';
import MainFooter from 'layouts/main/MainFooter';
import moment from 'moment';
import { MainContainer } from './styles';

export default function Discussion() {
  const { id } = useParams();
  const { forum } = useForum();
  return (
    <>
      <MainContainer>
        {forum
          .filter((element) => element.id === parseInt(id, 10))
          .map((item, index) => (
            <DiscussionCard
              key={index}
              id={item.id}
              heading={item.question}
              description={item.description}
              tag={item.category.name}
              time={moment(item.created_at).fromNow()}
              comments={item.comments}
            />
          ))}
      </MainContainer>{' '}
      <MainFooter />
    </>
  );
}