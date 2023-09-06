export const SET_BREEDS = 'SET_BREEDS';
export const FETCH_BREEDS = 'FETCH_BREEDS';

export const setBreeds = (breeds) => {
    return ({
        type: SET_BREEDS,
        payload: breeds
    })
}

export const fetchBreeds = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
  
        // Dispatch an action with the retrieved data
        dispatch({
          type: 'FETCH_BREEDS_SUCCESS',
          payload: data.message,
        });
      } catch (error) {
        // Handle errors, dispatch an error action, or set an error state
        dispatch({
          type: 'FETCH_BREEDS_FAILURE',
          error: error.message,
        });
      }
    };
  };

// export const fetchBreeds = () => {
//     return (dispatch) => {
//         fetch('https://dog.ceo/dog-api/list/all')
//         .then((res) => res.json())
//         .then((data => {
//             dispatch(setBreeds(data.message));
//         }))
//         .catch((err) => console.error('Error fetching breeds', err));
//     }
// }