
import './style.css'

window.addEventListener('load', () => {
  const h2List = document.querySelectorAll('h2')
  const navList = document.createElement('ul')
  navList.classList.add('left-nav')
  /**
   * @param {HTMLElement} h2 
   */
  function navItem(h2) {
    const res = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = h2.textContent
    a.href = '#' + h2.textContent
    h2.id = h2.textContent
    res.appendChild(a)
    return res
  }

  h2List.forEach(v => navList.appendChild(navItem(v)))
  document.body.appendChild(navList)
})