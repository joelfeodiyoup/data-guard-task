export const useTab = (tabTitle: Ref<string> | ComputedRef<string>) => {
    const { tabs } = useTabs();
    return tabs.get(tabTitle.value);
}