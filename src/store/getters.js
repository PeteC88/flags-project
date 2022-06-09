export default {
    nations(state) {
        return state.nations;
    },
    nationsFound(state) {
        return state.nations && state.nations.length > 0;
    },
    isDarkSwitcher(state) {
        return state.isDark;
    }
}