import { Link} from 'react-router-dom'

const Nav =() =>{
    return(
        <header>
      <nav>
<Link to='/'>Home</Link>{' '}
<Link to='/about/#section30'>About</Link>{' '}
<Link to='/contact' >Contact</Link>{' '}
<Link to='/shop'>Shop</Link>{' '}
<Link to='https://octopus.developers.institute/' >DI</Link>{' '}
      </nav>
    </header>
    )
}
export default Nav