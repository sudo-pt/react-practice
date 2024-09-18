import './App.css';
import UserList from "./component/UserList";

function App() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet"/>
            <div className="App">
                <UserList/>
            </div>
        </>
    );
}

export default App;
