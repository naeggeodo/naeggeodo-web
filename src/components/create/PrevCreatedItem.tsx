import Image from 'next/image';
import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import { RootState } from '../../modules';
import {
  deletePrevChatRoomActions,
  patchPrevChatRoomBookMarkActions,
  selectCopyPrevChatRoomData,
} from '../../modules/create/actions';
import { PrevCreatedListItem } from '../../modules/create/types';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

type StyledType = {
  isActive?: boolean;
};

const PrevCreatedItem = ({ data }: { data: PrevCreatedListItem }) => {
  const chatDate = useMemo(
    () => new DateFormatter(data.createDate),
    [data.createDate],
  );
  const dispatch = useDispatch();
  const { user_id } = useSelectLoginStates();

  const selectedPrevChatRoomData = useSelector(
    (state: RootState) => state.createStates.selectedPrevChatRoomData,
  );

  const selectPrevData = useCallback(() => {
    dispatch(selectCopyPrevChatRoomData(data));
  }, [dispatch]);

  const onBookmarkHandler = useCallback(() => {
    dispatch(
      patchPrevChatRoomBookMarkActions.request({
        chatMainId: data.id,
        userId: user_id,
      }),
    );
  }, [dispatch, data, user_id]);

  const onDeleteItem = useCallback(() => {
    dispatch(
      deletePrevChatRoomActions.request({
        userId: user_id,
        chatMainId: data.id,
      }),
    );
  }, [dispatch, data, user_id, data.id]);

  return (
    <Container
      isActive={
        selectedPrevChatRoomData && selectedPrevChatRoomData.id === data.id
      }>
      <Content>
        <InfoBox onClick={selectPrevData}>
          <Image
            src={data.imgPath ? data.imgPath : '/assets/images/hamburger.svg'}
            width={44}
            height={44}
          />
          <div>
            <Title>{data.title}</Title>
            <Date>{`${chatDate.formatDate()}  ${chatDate.formatTime()}`}</Date>
          </div>
        </InfoBox>
        {data.bookmarks === 'Y' ? (
          <BookmarkButton onClick={onBookmarkHandler}>
            <Image
              src="/assets/images/yellowstar.svg"
              width={18}
              height={24}
              layout="fixed"
            />
          </BookmarkButton>
        ) : (
          <BookmarkButton onClick={onBookmarkHandler}>
            <Image
              src="/assets/images/graystar.svg"
              width={18}
              height={24}
              layout="fixed"
            />
          </BookmarkButton>
        )}
        <DeleteButton onClick={onDeleteItem}>
          <Image
            src="/assets/images/close.svg"
            width={18}
            height={24}
            layout="fixed"
          />
        </DeleteButton>
      </Content>
    </Container>
  );
};

const Container = styled.div<StyledType>`
  border-bottom: 1px solid ${palette.bgGray};
  background: ${(props) => (props.isActive ? `${palette.bgGray}` : '#fff')};
  cursor: pointer;
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
  padding: 10px;
  background: transparent;

  border: none;
  outline: none;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 0.9375rem;
  margin-bottom: 5px;
  line-height: 20px;
`;

const Date = styled.span`
  font-size: 0.75rem;
  color: ${palette.DarkGray};
  background: ${palette.LightGray};
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  all: unset;

  padding: 6px;
  margin-left: 6px;
`;

export default PrevCreatedItem;
