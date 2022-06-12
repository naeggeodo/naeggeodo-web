import { useRouter } from 'next/router';
import { useCallback } from 'react';

// ? NEXT ROUTER 커스텀

export function useCustomRouter(url?: string) {
  const router = useRouter();

  const routeBack = useCallback(() => {
    router.back();
  }, [router]);

  const shiftPage = useCallback(() => {
    router.push(url);
  }, [router]);

  return { routeBack, shiftPage };
}
