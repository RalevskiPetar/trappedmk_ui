const InitialState = {
    money_tracker: {
        data: [],
        createStatus: " ",
        createMessage: " ",
        loadStatus: "idle",
        loadMessage: " "
    }
}

export const Money_Tracker_Reducer = (state = InitialState , action) => {
    switch(action.type) {
        case "FETCH_MONEY_TRACK_REQUEST":
            return {
             ...state,
             money_tracker : {
                ...state.money_tracker,
                createStatus: "Pending",
                createMessage: "Loading money_logs, please wait..."
             }
            }
        case "FETCH_MONEY_TRACK_SUCCESS":
            return {
               ...state,
               money_tracker: {
                createStatus: "Success",
                createMessage: " ",
                data: action.payload
               }     
            }    
        case "FETCH_MONEY_TRACK_FAILURE":
            return {
                  ...state,
                  money_tracker: {
                    createStatus: "Fail",
                    createMessage: action.payload
                  }      
            }
        case "CREATE_MONEY_TRACK_REQUEST":
            return {
              ...state,
              money_tracker: {
                ...state.money_tracker,
                createStatus: "Pending",
                createMessage: "Please wait..",
              }
            }    
        case "CREATE_MONEY_TRACK_SUCCESS":
            return {
                   ...state,
                   money_tracker: {
                    ...state.money_tracker,
                    createStatus: "Success",
                    createMessage: "",
                    data: [...state.money_tracker.data, action.payload.money_tracker]
                   } 
            }
        case "CREATE_MONEY_TRACK_FAILURE":
            return {
                ...state,
                money_tracker: {
                    createStatus: "Fail",
                    createMessage: action.payload
                }
                
            }
        case "UPDATE_MONEY_TRACK_REQUEST":
            return {
                ...state,
                money_tracker: {
                    loadStatus: "Pending",
                    loadMessage: "Please wait.."
                }
            }    
        case "UPDATE_MONEY_TRACK_SUCCESS":
            return {
               ...state,
               money_tracker:{
                data: [...state.money_tracker.data.filter(m => m.id != action.payload.id) , action.payload]
               }          
            }
        case "UPDATE_MONEY_TRACK_FAILURE":
            return {
                    ...state,
                    money_tracker: {
                        createStatus: "Fail",
                        createMessage: action.payload
                    }
                }
        default:
            return state                
            }    
        }
