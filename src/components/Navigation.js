import '../styles/navigation.scss';
import logo from '../images/insta-logo.png'
import search from '../images/search-insta.png'
import Menu from './Menu.js'


function Navigation()
{
    return (
        <div className='navigation'>
            <div className='container'>
                <img className='logo' src={logo} alt='bdaylogo'/>
                <div className='search'>
                    <img className='searchIcon' src={search} alt='search button'/>
                    <span className='searchText'>Search</span>                
                </div>
                <Menu/>
            </div>
        </div>
    )
}


export default Navigation;