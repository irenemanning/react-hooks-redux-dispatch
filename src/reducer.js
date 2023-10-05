let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

render();

// Run dispatch({type: 'counter/increment'}) in browser console and count will go up