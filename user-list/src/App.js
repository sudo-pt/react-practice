import './App.css';
import UserTable from "./component/UserTable";

function App() {
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            email: 'Person1@test.com',
            address: '123 Main St, Springfield',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            email: 'Person2@test.com',
            address: '456 Oak Ave, Greenfield',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            email: 'Person3@test.com',
            address: '789 Pine Rd, Blacktown',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            email: 'Person4@test.com',
            address: '321 Birch Blvd, Redville',
        },
        {
            key: '5',
            name: 'Peter',
            age: 41,
            email: 'Peter@test.com',
            address: '654 Maple St, Peterville',
        },
    ];

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet"/>
            <div className="App">
                <UserTable dataSource={data}/>
            </div>
        </>
    );
}

export default App;
