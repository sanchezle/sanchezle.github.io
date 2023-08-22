
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);

function LikeButton() {
    // ... component code here
    return (
        <button>Like</button>
    );
}

const e = React.createElement;

root.render(e(LikeButton));


