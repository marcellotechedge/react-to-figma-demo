import "./MainContainer.css";

interface Props {
    children: any;
}

export const MainContainer = (props: Props) => {
    return  <div className="main-container">
                {props.children}
            </div>
}