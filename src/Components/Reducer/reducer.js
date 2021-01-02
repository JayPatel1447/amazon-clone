export const initialState = {
    basket: []
};

//selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount , 0);

//Reducer is something which will help us to add item to datalayer and then pull it out and display to updated Cart

//Where state is state of the application and Action means what you are trying to do.. Adding to basket or Removing from basket
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, // Original State - Old One
                basket: [...state.basket, action.item], //Whatever state currently was + add action item (may be we add 5 basket) 
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketIndex) => basketIndex.id === action.id
            )

            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else{
                console.warn(`cant remove the item from basket ${action.id}`)
            }

            return {
                ...state, basket:newBasket
            }


        default:
            return state;
    }

}

export default reducer;