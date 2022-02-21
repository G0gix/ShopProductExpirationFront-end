import { useMemo } from "react"


export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("Отработала функция сортировки")
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSeachedPosts = useMemo(() => {
        console.log(posts.productName)
        return sortedPosts.filter(post => post.productName.toLowerCase().includes(query))
    }, [query, sortedPosts]);

    return sortedAndSeachedPosts;
}