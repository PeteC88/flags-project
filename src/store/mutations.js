export default {
    //mutation to use the fetched data (fetched in actions.js)
    setNations(state, payload) {
        //payload is an array full of nations
        state.nations = payload;
    },
    DarkModeSwitcher(state) {
        state.isDark = !state.isDark;
    }
};