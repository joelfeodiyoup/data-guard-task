/**
 * Some global state to say if all the plugins should be disabled or not
 * @returns 
 */
export const useDisableAllPlugins = () => {
    return useState('allDisabled', () => false);
}