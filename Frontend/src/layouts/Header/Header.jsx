// IMPORTS
import './header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'
import Account from '../../components/Account/Account'

function Header() {
   return (
      <header>
         <nav className='cont-nav'>

            <Link to="/">
               <img className='logo-header' alt='Logo de Argent Bank' src={Logo} />
            </Link>
            <Account />
         </nav>
      </header>

   )
}
 
export default Header