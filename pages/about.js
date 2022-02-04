import { useState } from 'react';


function About() {
    let [count, setCounter] = useState(0);

    return (
        <>
            <div>Test: {count}</div>
            <button onClick={() => setCounter(count + 1)}>click here</button>
        </>
    );
}

export default About;