import '../styles/menu.scss';
import {ReactComponent as Home} from '../images/home.svg'
import {ReactComponent as Message} from '../images/message.svg'
import {ReactComponent as Explore} from '../images/explore.svg'
import {ReactComponent as Notification} from '../images/notification.svg'
import ProfileIcon from "./ProfileIcon"
import Dp from "../images/dp.JPG"

function Menu()
{
    return(
        <div className='menu'>
            <Home className='icon'/>
            <Message className='icon'/>
            <Explore className='icon'/>
            <Notification className='icon'/>
            {/* <ProfileIcon iconSize="small" image={Dp} storyBorder={true} /> */}
            <ProfileIcon iconSize="small" image={Dp}  />


        </div>
    )
}

export default Menu;