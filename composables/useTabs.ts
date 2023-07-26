export type Tab = {
    title: string,
    icon: string,
    active: string[],
    disabled: string[],
    inactive: string[],
}

/**
 * Fetches tabs from server
 * @returns 
 */
export const useTabs = () => {
    const {data} = useFetch('/api/tabs');
    const x = (Object.values(data.value ?? {}) as Tab[]);
    const tabs = new Map<string, Tab>(
            x.map(tab => {
                return ([
                    tab.title.toLowerCase() as string,
                    {
                        ...tab,
                        icon: useIconConverter(tab.icon) ?? ''
                    }
                ])
            })
        );
    return {tabs};
}
