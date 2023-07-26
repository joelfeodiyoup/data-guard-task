/**
 * Icons could be stored on the server with any string key
 * This converts them to some other thing, for display.
 * @param key 
 * @returns 
 */
export const useIconConverter = (key: string) => {
    const iconMapper = new Map([
        ['icon-marketing', 'eos-icons:installing'],
        ['icon-finance', 'eos-icons:database-outlined'],
        ['icon-people', 'eos-icons:data-scientist'],
    ]);
    const icon = iconMapper.get(key);
    return icon;
}