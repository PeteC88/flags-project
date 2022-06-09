export default {
    //action to fetch the data from the API
    async loadNations(context) {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error
        }

        const nations = [];

        for (const key in responseData) {
            const nation = {
                name: responseData[key].name,
                population: responseData[key].population,
                region: responseData[key].region,
                capital: responseData[key].capital,
                flags: responseData[key].flags,
                nativeName: responseData[key].nativeName,
                tld: responseData[key].tld,
                currencies: responseData[key].currencies,
                languages: responseData[key].languages,
                cca3: responseData[key].cca3,
                borders: responseData[key].borders
            }

            nations.push(nation);

            if (!nation.capital) {
                nation.capital = "None";
            }
        }
        //commit the action to the mutations
        context.commit('setNations', nations)
    },
    isDarkSwitcherAction(context) {
        context.commit('DarkModeSwitcher');
    }
};