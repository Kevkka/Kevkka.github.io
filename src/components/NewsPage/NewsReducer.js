const newsList = [
    {
        _id: '1',
        title: 'News 1',
        description: 'Description 1',
        content: 'Content 1',
    },
    {
        _id: '2',
        title: 'News 2',
        description: 'Description 2',
        content: 'Content 2',
    },
]


export const ACTION_TYPES = {
    ADD_NEWS: 'ADD_NEWS',
    DELETE_NEWS: 'DELETE_NEWS',
    UPDATE_NEWS: 'UPDATE_NEWS',
}

 export const NEWS_REDUCER_INITIAL_STATE = {
    news: newsList,
}  

 export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.ADD_NEWS:{

            const { news } = state;
            const updatedNews = [payload, ...news]
            
            const updatedState = {
                ...state,
                news: updatedNews
            }
            return updatedState;
            
        }
  
        case ACTION_TYPES.DELETE_NEWS: {
            const { news } = state;
            const updatedNews = news.filter(news => news._id !== payload);
            const updatedState = {
                ...state,
                news: updatedNews
            }
            return updatedState;
        }
        case ACTION_TYPES.UPDATE_NEWS: {
            const { news } = state;
            const updatedNews = news.map(news => {
                if (news._id === payload._id) {
                    return payload;
                }
                return news;
            });
            const updatedState = {
                ...state,
                news: updatedNews
            }
            return updatedState;
        }
        default:
            return state;
    }

}