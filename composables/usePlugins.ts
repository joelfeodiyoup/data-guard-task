export type Plugin = {
    title: string,
    description: string,
}
export const usePlugins = () => {
    const {data} = useFetch('/api/plugins');
    const plugins = new Map<string, Plugin>(Object.entries(data.value ?? {}));
    return {plugins};
}