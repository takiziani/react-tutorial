import List from "../list/list";
export default function Lists() {
    const fruits = [
        { id: 1, name: "apple", calories: 52 },
        { id: 2, name: "banana", calories: 72 },
        { id: 3, name: "orange", calories: 42 },
        { id: 4, name: "grape", calories: 12 },
        { id: 5, name: "kiwi", calories: 30 }
    ];
    const vegetables = [
        { id: 1, name: "carrot", calories: 41 },
        { id: 2, name: "broccoli", calories: 55 },
        { id: 3, name: "spinach", calories: 23 },
        { id: 4, name: "potato", calories: 77 },
        { id: 5, name: "cucumber", calories: 16 }
    ];
    return (
        <div>
            <h1>lists</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <List list={fruits} category="fruits" />
            <List list={vegetables} category="vegetables" />
        </div>
    );
}