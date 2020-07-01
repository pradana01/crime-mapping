const defaultState = {
  reports: [],
  newsfeed: [],
};

export default function reportReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_NEWSFEED":
      return {
        ...state,
        newsfeed: action.payload.newsfeed,
      };
    case "FETCH_REPORT":
      return {
        ...state,
        reports: action.payload.reports,
      };
    case "DELETE_REPORT":
      let ids = action.payload.id;
      let filteredReports = state.reports.filter(function (element) {
        return element.id !== Number(ids);
      });
      let filteredNewsfeed = state.newsfeed.filter(function (element) {
        return element.id !== Number(ids);
      });
      return { ...state, reports: (state.reports = filteredReports), newsfeed: (state.newsfeed = filteredNewsfeed) };
    case "ADD_REPORT":
      return {
        ...state,
        reports: state.reports.concat(action.payload.reports),
        newsfeed: state.newsfeed.concat(action.payload.reports),
      };
    case "EDIT_REPORT":
      let idss = action.payload.id;
      let editedReports = state.reports.filter(function (element) {
        return element.id !== Number(idss);
      });
      let editedNewsfeed = state.newsfeed.filter(function (element) {
        return element.id !== Number(idss);
      });
      editedNewsfeed.concat(action.payload.reports);
      editedReports.concat(action.payload.reports);
      return {
        ...state,
        reports: (state.reports = editedReports),
        newsfeed: (state.newsfeed = editedNewsfeed),
      };
    default:
      return state;
  }
}
