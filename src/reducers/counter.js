const counter = (state = {}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        {
            const copy = {...state};
            copy.num += 1;
            return copy;
        }
      case 'INCREMENTX':
        {
            const copy = {...state};
            copy.num += parseInt(action.x);
            return copy;
        }
      case 'DECREMENT':
        {
            const copy = {...state};
            copy.num -= 1;
            return copy;
        }
      default:
        return {
            num: 42
        }
    }
}

export default counter;