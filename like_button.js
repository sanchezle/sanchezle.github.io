
// Create an alias for React.createElement
const e = React.createElement;

// Define the LikeButton component
function LikeButton() {
  // ... component logic here

  return e('button', null, 'Like');
}

// Rendering the LikeButton component to the DOM
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

