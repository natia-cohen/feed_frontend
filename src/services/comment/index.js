const { DEV, VITE_LOCAL } = import.meta.env

// import { getRandomIntInclusive, makeId } from '../util.service'

// import { itemService as local } from './item.service.local'
import { commentService as remote } from './comment.service.remote'


function getDefaultFilter() {
    return {
        email: '',
        message: ''
    };
}
function getEmptyComment() {
    return {
        email: '',
        message: '',
        picture: '',
        createdAt: new Date().toISOString(),
        likes: 0
    };
}


const service = VITE_LOCAL === 'true' ? local : remote
export const commentService = { getEmptyComment, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.commentService = commentService  
