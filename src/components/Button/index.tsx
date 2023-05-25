import type {ButtonHTMLAttributes} from 'react';


function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props}>{props.children}</button>
}

export default Button