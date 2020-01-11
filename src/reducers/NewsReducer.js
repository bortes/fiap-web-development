import * as NewsActions from '../actions/NewsActions';

const NewsReducer = (state = [], action) => {
    switch(action.type) {
        case NewsActions.CREATE_NEWS:
            return state.concat([action.data]);

        case NewsActions.READ_NEWS:
            return state;

        case NewsActions.UPDATE_NEWS:
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                } else
                    return post;
            })

        case NewsActions.DELETE_NEWS:
            return state.filter((post)=>post.id !== action.id);

        case NewsActions.EDIT_NEWS:
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)

        default:
            return state;
    }
}

export default NewsReducer;