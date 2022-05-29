import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export function useLoadLib() {
  const router = useRouter();
  const dispatch = useDispatch();

  return { router, dispatch };
}
