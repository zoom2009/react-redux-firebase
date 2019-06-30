const initState = {
    projects: [
        {id: '1', title: 'Hi son this is react', content: 'blah blah blah...'},
        {id: '2', title: 'Redux is very awesome', content: 'blah blah blah...'},
        {id: '3', title: 'Mobx, Is it good ?', content: 'blah blah blah...'},
    ],
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer
