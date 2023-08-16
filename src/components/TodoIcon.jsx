import { ReactComponent as CheckSVG} from "./CheckIcon.svg"
import { ReactComponent as DeleteSVG} from "./DeleteIcon.svg"
import "./TodoIcon.css";

const iconTypes = {
    "check" : (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete" :(color) =>  <DeleteSVG className="Icon-svg" fill={color}/>
};

export const TodoIcon = ({ type, color , onClick}) => {
  return (
    <span onClick={() => onClick()} className={`Icon-container Icon-container-${type}`}>
        {
            iconTypes[type](color)
        }
    </span>
  )
}
