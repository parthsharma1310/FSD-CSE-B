import ReactDOM from "react-dom/client";
function Book(){
    return(
        <div>
            <img src="book-cover.jpg" alt="Book Cover" />
            <h3>The Great Book</h3>
            <h4>Price: ₹834/-</h4>
            <button>Buy Now</button>

        </div>
    );
}
const parent=document.getElementById("root");   
const root=ReactDOM.createRoot(parent);
root.render(<Book/>);