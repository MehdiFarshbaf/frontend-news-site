import {createContext, useEffect, useReducer} from "react";
import {videoReducer} from "./reducers/reducerVideo";
import {VIDEO_REQUEST, VIDEO_SUCCESS, VIDEO_FAIL} from "./constants/videoConstanst";
import http from '../helper/API'

export const HomeContext = createContext()

export const HomeContextProvider = ({children}) => {

    const INITIAL_STATE = {
        loading: true,
        error: "",
        video: {}
    }
    const [state, dispatch] = useReducer(videoReducer, INITIAL_STATE)

    const loadVideo = async () => {
        try {
            dispatch({type: VIDEO_REQUEST})
            const {data} = await http.get("/video/get-last-video")
            if (data.success) {
                dispatch({type: VIDEO_SUCCESS, payload: data.video})
                console.log(data)
            }
        } catch (err) {
            dispatch({type: VIDEO_FAIL, payload: err.data.message})
        }
    }

    useEffect(() => {
        loadVideo()
    }, []);
    return (
        <HomeContext.Provider value={{
            loading: state.loading,
            video: state.video,
            error: state.error
        }}>
            {children}
        </HomeContext.Provider>
    )
}