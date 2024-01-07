import {VIDEO_REQUEST, VIDEO_FAIL, VIDEO_SUCCESS} from '../constants/videoConstanst'

export const videoReducer = (state = {video:{}}, action) => {
    switch (action.type) {
        case VIDEO_REQUEST:
            return {loading: true, video: []}
        case VIDEO_SUCCESS:
            return {loading: false, video: action.payload}
        case VIDEO_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}