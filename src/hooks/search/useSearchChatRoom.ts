import { NextRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  PointerEvent,
  useCallback,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../modules';
import { openLoginModal } from '../../modules/modal/actions';
import { useSelectLoginStates } from '../select/useSelectLoginStates';

export function useSearchChatRoom(dispatch: Dispatch, router: NextRouter) {
  const [searchValue, setSearchValue] = useState('');
  const tags = useSelector(
    (state: RootState) => state.searchPageState.searchTagList.tags,
  );
  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );
  const selected = useSelector(
    (state: RootState) => state.searchPageState.selected,
  );

  const handleChangeSearchValue = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => void
  >(
    (e) => {
      setSearchValue(e.target.value);
    },
    [searchValue],
  );
  const { accessToken } = useSelectLoginStates();

  const getSearchListByTag = useCallback<
    (e: PointerEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      const target = e.target as HTMLButtonElement;
      const searchTagValue = target.getAttribute('data-value');

      if (accessToken) {
        router.push({
          pathname: '/search',
          query: {
            tag: encodeURI(searchTagValue),
          },
        });
      } else {
        dispatch(openLoginModal());
      }
    },
    [dispatch, router, accessToken],
  );

  const getSearchListByInput = useCallback<
    (e: FormEvent<HTMLFormElement>) => void
  >(
    (e) => {
      e.preventDefault();

      if (accessToken) {
        router.push({
          pathname: '/search',
          query: {
            keyword: encodeURI(searchValue),
          },
        });
      } else {
        dispatch(openLoginModal());
      }
    },
    [dispatch, searchValue, router, accessToken],
  );

  return {
    searchValue,
    handleChangeSearchValue,
    getSearchListByTag,
    getSearchListByInput,
    tags,
    searchResultList,
    selected,
  };
}
