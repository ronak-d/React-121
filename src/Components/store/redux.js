

// const reducer = (state, action) =>{
//     switch(action.type){
//         case "INCREMENT":return{
//             ...state,
//             count:state.count+1
//         }
//         case "DECCREMENT":return{
//             ...state,
//             count:state.count-1
//         }
//         default: return state
            
//     }
// }

// class store{
//     #reducer
//     #state
//     #listeners

//     constructor(reducer, initstate){
//         this.#reducer = reducer;
//         this.#state = initstate;
//         this.#listeners = [];
//     }

//     getState(){
//         return this.state;
//     }

//     dispatch(action){
//         // updating the state
//         const oldState = this.#state;
//         this.state = this.#reducer(this.#listeners);
//         console.log(this.#state === oldstate);
        
//         if(oldstate !== this.#state){
//             this.#listeners.forEach(listeners);
//         }
//     }
//     subscribe(listener){
//         this.#listeners.push(listener);
//     }

//     const initstate = {count:0}
//     const store = new store(reducer,initState)

//     store.subscribe (() =>{
        
//     })
// }