import { 
    ADICIONA_CARRINHO,
    DELETE_ITEM
} from './types';

export const add_carrinho = item => {
    return {
        type: ADICIONA_CARRINHO,
        payload: item
    }
}

export const delete_item = item => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

