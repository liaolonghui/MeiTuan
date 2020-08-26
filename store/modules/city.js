const state = () => ({
    list: []
})

const mutations = {
    add(state, text){
        state.list.push(text)
    }
}

const actions = {
    add:({commit}, text)=>{
        commit('add', text)
    }
}

export default {
    nameSpaced: true,
    state,
    mutations,
    actions
}