
const createLogo = () => {
    const logo = document.createElement('div')
    logo.classList.add('logo')

    const logoText = document.createElement('p')
    logoText.innerText = `Amber's Steakhouse`
    logo.appendChild(logoText)
    return logo
}

export default function createHeader() {
    const header = document.createElement('header')

    header.appendChild(createLogo())
    return header
}