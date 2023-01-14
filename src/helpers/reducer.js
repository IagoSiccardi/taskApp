const reducer = (state = [], action) => {
  
    switch (action.type) {
        case 'add':
        
            return [...state,action.payload]

        case 'delete':

            return state.filter(task => task.id !== action.payload)

        case 'edit': 
            return state.map(task => {

                if (task.id === action.payload.id ) {
                    return {
                        ...task,
                        desc: action.payload.desc
                    }
                }else {
                    return task
                }

            })

        default:

            return state
    }
    

}

export default reducer