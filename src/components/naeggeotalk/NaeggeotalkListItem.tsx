import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setNaeggeotalkItemBookmarkActions } from '../../modules/naeggeotalk/actions';
import { NaeggeotalkItem } from '../../modules/naeggeotalk/types';

type StyledType = {
  isActive?: boolean;
};

const NaeggeotalkListItem = ({
  data,
  setSelectItem,
}: {
  data: NaeggeotalkItem;
  setSelectItem: Dispatch<SetStateAction<NaeggeotalkItem>>;
}) => {
  const dispatch = useDispatch();

  const onSelect = () => {
    setSelectItem(data);
  };

  const onBookmarkHandler = () => {
    dispatch(
      setNaeggeotalkItemBookmarkActions.request({
        chatMainId: String(data.id),
        userId: '1',
      }),
    );
  };

  return (
    <Container isActive={true}>
      <Content>
        <InfoBox onClick={onSelect}>
          <Image src='/assets/images/hamburger.svg' width={44} height={44} />
          <div>
            <Title>{data.title}</Title>
            <Date>{data.createDate}</Date>
          </div>
        </InfoBox>
        {data.bookmarks === 'Y' ? (
          <BookmarkButton onClick={onBookmarkHandler}>
            <Image
              src='/assets/images/yellowstar.svg'
              width={18}
              height={24}
              layout='fixed'
            />
          </BookmarkButton>
        ) : (
          <BookmarkButton onClick={onBookmarkHandler}>
            <Image
              src='/assets/images/graystar.svg'
              width={18}
              height={24}
              layout='fixed'
            />
          </BookmarkButton>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div<StyledType>`
  border-bottom: 1px solid #f2f2f8;
  background: ${(props) => (props.isActive ? ' #f2f2f8;' : '#fff')};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;

  margin: 0 auto;
`;

const InfoBox = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const BookmarkButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background: transparent;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 0.9375rem;
  margin-bottom: 5px;
  line-height: 20px;
`;

const Date = styled.span`
  font-size: 0.75rem;
  color: #696969;
  background: #ebebeb;
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 3px;
`;

export default NaeggeotalkListItem;
