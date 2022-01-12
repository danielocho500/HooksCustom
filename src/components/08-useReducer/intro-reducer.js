
const initialState = [{
    id: 1,
    todo: 'comprarLeche',
    done: false
}]

const toDoReducer_ = (state = initialState, action) => {

    if(action?.type == 'add'){
        return [...state, action.payload];
    }
    
    return state;
}


let toDos = toDoReducer_();

const newToDo = {
    id: 2,
    toDo: 'ver a los knicks',
    done: false
}

const action = {
    type: 'add',
    payload: newToDo
}

toDos = toDoReducer_(toDos, action)

console.log(toDos);



