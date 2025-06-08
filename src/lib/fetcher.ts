export const jsonFetcher = (...args) => fetch(...args).then((res) => res.json())
