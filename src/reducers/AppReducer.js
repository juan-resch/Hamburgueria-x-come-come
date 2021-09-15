import { ADICIONA_CARRINHO, DELETE_ITEM } from "../actions/types";

const INITIAL_STATE = {
    items: [{
        id: 1,
        name: 'x-tudo em dobro',
        price: '13.99',
        desc: '2 Carnes 1 Ovo Salada Molho Batata Palha..',
        img: 'https://i.pinimg.com/originals/11/a5/5a/11a55a964c278eec04d849c5d312bfee.jpg'
      },
      {
        id: 2,
        name: 'x-tudo normal',
        price: '8.99',
        desc: '1 Carne Ovo Salada Molho Batata Palha..',
        img: 'https://img.quizur.com/f/img5cd1c8bc03f812.75242016.jpg?lastEdited=1557252293'
      },
      {
        id: 3,
        name: 'x-picanha quádruplo',
        price: '23.99',
        desc: '4 Carnes 2 Ovo Salada Molho Batata Palha Salsicha',
        img: 'https://portalcampobelo.com.br/arquivos/noticia/8480/05-01-2018-sand_2.jpg'
      },
      {
        id: 4,
        name: 'x-frango com ovo',
        price: '3.99',
        desc: '1 frango 1 Ovo Salada Molho Batata Palha Salsicha',
        img: 'https://d37k6lxrz24y4c.cloudfront.net/v2/pt-br/e9dc924f238fa6cc29465942875fe8f0/67a3c220-148a-491e-9cb7-104de5a62763-500.jpg'
      }
    ],
    carrinho: []
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case ADICIONA_CARRINHO:
          for(let i = 0 ; i < state.carrinho.length ; i++){
            if(action.payload.id === state.carrinho[i].id){
              let new_carrinho = state.carrinho;
              new_carrinho[i].quantidade += action.payload.quantidade;

              return { ...state, carrinho: new_carrinho}
            }
          }
            return { ...state, carrinho: [...state.carrinho, action.payload]}
        case DELETE_ITEM:
          let new_carrinho = [];
          for(let i = 0 ; i < state.carrinho.length ; i++){
            if(!(action.payload.id === state.carrinho[i].id)){
              if(new_carrinho.length > 0){
                new_carrinho = [...new_carrinho, state.carrinho[i]];
              }else new_carrinho = [state.carrinho[i]];
            }
          }
          return { ...state, carrinho: new_carrinho}
        default:
            return state;
    }
}