export const initialState = {
    basket: []
};

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
        default:
            return state;
    }

}

export default reducer;