const defaultState = {
    reports : [],
    newsfeed : []
}

export default function reportReducer(state = defaultState, action) {
    switch (action.type) {
        case 'FETCH_NEWSFEED':
            return {
                ...state,
                newsfeed: action.payload.newsfeed
            }
        case 'FETCH_REPORT':
            return {
                ...state,
                reports: action.payload.reports
            }
        default:
            return state
    }
}