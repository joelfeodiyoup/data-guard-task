/**
 * This is a Post endpoint for the mock server.
 * It saves a 'Tab' object (changes which plugins for that tab are active/inactive/disabled)
 * 
 * I'm doing a lookup of the 'title' found in the page, to match against the 'tab' objects on the server.
 * I don't really like this. If I did it again, I'd use a more proper id.
 * There were some issues with using a Map<string, Tab>-like object, where the string was the id.
 * 
 * Usage, something like:
 * useFetch(`/api/tab/${tabGroup.title}`,
            {method: 'post', body: tabGroup }
 * Returns the 'Tab' that was saved.
 */
export default defineEventHandler(async (event) => {
    let tabs = await useStorage().getItem('mock:tabs');
    const body = await readBody(event)
    const [key, value] = Object.entries(tabs)
        .find(([key, value]) => (value?.title ?? '') === body.title) ?? ['', ''];
    tabs[key] = body;
    await useStorage().setItem('mock:tabs', tabs)
    return body;
})