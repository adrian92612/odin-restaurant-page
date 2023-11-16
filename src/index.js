import './styles/main.css'
import createHeader from './header'
import createFooter from './footer'
import createHomePage from './Pages/home'


const root = document.getElementById('root')
root.appendChild(createHeader())
root.appendChild(createHomePage())
root.appendChild(createFooter())
console.log('asdfdas')