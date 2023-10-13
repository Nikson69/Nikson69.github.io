import { useRouter } from "next/router";
import { activeItemAbout, activeItemPosts } from "../components/header";

export const getActiveItemFromPath = (): string => {
    const router = useRouter();
    const path = router.pathname || '';
    let result = ''
    if(path.includes(activeItemAbout)){
      result = activeItemAbout;
    } else if (path.includes(activeItemPosts)){
      result = activeItemPosts;
    }

    return result;
  }