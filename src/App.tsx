import { useState } from "react";
import Input from "./components/Input";
function App() {
    const [value, setValue] = useState('');
    const changeValue = (e:any) => {
        console.log(value);
        setValue(e.target.value);
    }

    return (
    <>
        <Input onChange={changeValue}/>
    </>
    );
}

export default App;