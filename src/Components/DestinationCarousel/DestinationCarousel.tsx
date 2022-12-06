import { Typography } from "../Title/Typography";
import "./DestinationCarousel.css";

interface Props {
    children: any;
}

export const DestinationCarousel = (props: Props) => {
    return  <div className="destination-carousel">
                {props.children}
            </div>
}