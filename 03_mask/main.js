import './main.scss'
import '../index.js'

const inner = document.querySelector('.mask-3 .inner')
document.querySelector('#mask-3-loc').addEventListener('input', e => {
  const v = Number(e.target.value)
  inner.style.maskPosition = `${v}% 50%`
  inner.style.webkitMaskPosition = `${v}% 50%`
})

const mask4 = document.querySelector('.mask-4')
document.querySelectorAll('input[name=mask-4]').forEach(item =>
  item.addEventListener('change', e => {
    var name = e.target.value
    // console.log(name);
    mask4.style.maskComposite = name
    mask4.style.webkitMaskComposite = name
  })
)