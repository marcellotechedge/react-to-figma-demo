import "./Button.css";

interface ButtonProps {
    label: string;
    type: "primary" | "inverted"
}

export const Button = (props: ButtonProps) => {
    return  <a className={`btn btn-${props.type}`}>
                {props.label}
            </a>
}