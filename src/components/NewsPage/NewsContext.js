import { createContext, useReducer } from "react";
import { ACTION_TYPES, NEWS_REDUCER_INITIAL_STATE, reducer } from "./NewsReducer";

export const NewsContext = createContext({
    addNews: () => {},
    deleteNews: () => {},
    updateNews: () => {},
    news: [],
});

export const NewsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, NEWS_REDUCER_INITIAL_STATE);
    const { news } = state;

    const addNews = newNewsData => {
        dispatch({ type: ACTION_TYPES.ADD_NEWS, payload: newNewsData });
    }

    const deleteNews = (_id) => {
        dispatch({ type: ACTION_TYPES.DELETE_NEWS, payload: _id });
    }

    const updateNews = (news) => {
        dispatch({ type: ACTION_TYPES.UPDATE_NEWS, payload: news });
    }

    const ctxValue = {
        addNews,
        deleteNews,
        updateNews,
        news,
    }

    return (
        <NewsContext.Provider value={ctxValue}>
            {children}
        </NewsContext.Provider>
    )
}