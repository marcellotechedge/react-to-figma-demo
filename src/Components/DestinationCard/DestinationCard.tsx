import "./DestinationCard.css";
import img1 from './../../img1.png';
import img2 from './../../img2.png';
import img3 from './../../img3.png';

interface Props {
    img: "img1" | "img2" | "img3"
    title: string;
    subTitle: string;
    price: string;
}

export const DestinationCard = (props: Props) => {

    let img : string | undefined = undefined;
    switch (props.img) {
        case "img1":
            img = img1;
            break;
        case "img2":
            img = img2;
            break;
        case "img3":
            img = img3;
            break;
        default:
            break;
    }

    return  <div className="destination-card">
                <img src={img} className="destination-img" />
                <div className="destination-card-text">
                    <div className="title-row">
                        <div className="destination-title">{props.title}</div>
                        <div className="destination-price">{props.price}</div>
                    </div>
                    <div className="destination-sub-title">{props.subTitle}</div>
                </div>
            </div>
}