import ReactDOM from "react-dom/client";
function Book({ book }) {
    return (
        <div className="card">
            <img src={book.image} height="200" width="200" alt={book.title} />
            <h3>Title: {book.title}</h3>
            <h4>Price: ₹{book.price}</h4>
            <button>Add to cart</button>
        </div>
    );
}

const books = [
    { image: "https://via.placeholder.com/200", title: "Math", price: 200 },
    { image: "https://via.placeholder.com/200", title: "English", price: 300 },
    { image: "https://via.placeholder.com/200", title: "Physics", price: 400 },
    { image: "https://via.placeholder.com/200", title: "Chemistry", price: 500 }
];

function App() {
    return (
        <div>
            {books.map((b, i) => (
                <Book key={i} book={b} />
            ))}
        </div>
    );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
