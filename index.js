const featureBoxes = document.querySelectorAll('.feature-box')
featureBoxes.forEach(box => {
  const showTooltip = (e) => {
    const tooltip = document.createElement('div')
    tooltip.className = 'tooltip'
    tooltip.textContent = box.dataset.tooltip
    box.appendChild(tooltip)
  }

  const hideTooltip = () => {
    const tooltip = box.querySelector('.tooltip')
    if (tooltip) {
      tooltip.remove()
    }
  }
  box.addEventListener('mouseenter', showTooltip)
  box.addEventListener('mouseleave', hideTooltip)

  box.addEventListener('touchstart', (e) => {
    e.preventDefault()
    const tooltip = box.querySelector('.tooltip')
    if (tooltip) {
      hideTooltip()
    } else {
      document.querySelectorAll('.tooltip').forEach(t => t.remove())
      showTooltip()
    }
  })
})

// until it's done, not available :3
// document.getElementById('login').addEventListener('click', () => {
//   window.location.href = '/login'
// })
