export default function createFooter() {
    const footer = document.createElement('footer')
    const text = document.createElement('p')
    text.innerText = 'Created by Adrian92612'
    footer.appendChild(text)
    return footer
}