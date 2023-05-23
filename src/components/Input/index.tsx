import {InputHTMLAttributes} from 'react';
// type 과 interface 선언 차이
type Color = string;
type ColorObj = {color: Color};


const MyColor1: Color = 'red';
const MyColor2: ColorObj = {color: "red"};

interface MyInterface {
    color: string;
    id: number;
}

// type 과 interface 상속 차이
type MyType2 = {color: string}
type OpacityData = { opacity: number }
type MyMixType = MyType2 | OpacityData; // MyType 또는 OpacityData
const Data: MyMixType = {color: 'red', opacity: 1}

interface Human {
    name: string;
    old: number;
}

interface HJ extends Human {
    job: string;
}

const hj: HJ = {name: 'hj', old:23, job:'developer'}


interface MyOpacity {
    opacity: number;
}
interface MyInterface2 extends MyOpacity{
    color: string;
}
const Data2: MyInterface2 = {color: 'red', opacity: 1}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: string; // | undefined
}
function Input(props:InputProps) {
    return <input {...props}/>
}

export default Input;
