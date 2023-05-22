import {InputHTMLAttributes} from 'react';
type MyType = {color: string; value: number;};
interface MyInterface {
    color: string;
    value: number;

}

const MyData = {
    color:'#000',

}

function Input(props:InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props}/>
}

export default Input;