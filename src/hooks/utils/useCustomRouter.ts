import { useRouter } from 'next/router';
import { useCallback } from 'react';

// ? NEXT ROUTER 커스텀

export function useCustomRouter() {
  const router = useRouter();

  const routeBack = useCallback(() => {
    router.back();
  }, [router]);

  return { routeBack };
}
