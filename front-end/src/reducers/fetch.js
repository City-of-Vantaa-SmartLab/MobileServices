import * as actions from 'actions/actionTypes';

const initialState = {
    feeds: {
        loading: false,
        data: [],
        last: null,
        error: null,
    },
    carousel: {
        loading: false,
        images: [
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/AG_Tikkurilan_kirjasto4.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/AG_lukukoira9.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/AHa_Hakunilan Skeittipuisto-9164.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/AHa_tiksiblockparty-9491.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/FS_Pitkakoski-18.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/Lentokenttakallio-8842.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SLI-4500.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SLi-0418.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SLi-9655.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SM-Vantaa_kuvia-6003.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SMa_Hakunila-7701.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SMa_Kuusijarvi-1274.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SMa_Lentokone-0079.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SMa_Robolukio-9968.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SMa_Rockfest-6295.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/SMa_Tikkurilan_tori_semmarit-6262.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/martinlaakso_MG_7597.png',
            'https://s3-eu-west-1.amazonaws.com/vantaa-mobiili-carousel/myyrmaki_MG_2778.png',
        ],
        preloaded: [],
        error: null,
    },
};

export function feed(state = initialState.feeds, action) {
    switch (action.type) {
        case actions.FEED_FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case actions.FEED_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, ...action.payload],
                last: action.payload.slice(-1)[0].id,
            };
        case actions.FEED_FETCH_FAILED:
            return { ...state, loading: false, error: action.payload };
        case actions.TOGGLE_FEED:
            return { ...state, data: [], last: null };
        case actions.CHANGE_LANGUAGE:
            return { ...state, data: [], last: null };
        default:
            return state;
    }
}

export function carousel(state = initialState.carousel, action) {
    switch (action.type) {
        case actions.PRELOAD_IMAGES:
            return {
                ...state,
                preloaded: action.payload,
            };
        default:
            return state;
    }
}
