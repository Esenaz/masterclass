export function createCatalogItem(item) {
    const itemContainer = document.createElement('div')
    itemContainer.className = 'catalog__item'

    const link = document.createElement('a')
    link.href = `http://127.0.0.1:5500/item.html?id=${item.id}`
  
    const title = document.createElement('h2')
    title.className = 'catalog__item-title'
    title.textContent = item.name

    link.append(title)
  
    const image = document.createElement('img')
    image.setAttribute('src', item.image)
    image.className = 'catalog__item-image'


    const price = document.createElement('div')
    price.className = 'catalog__item-price'
    price.textContent = `$${item.cost}`

    const priceBtn = document.createElement('button')
    priceBtn.className = 'catalog__item-buy-btn'
    priceBtn.textContent = 'BUY'


    itemContainer.append(link, image, price, priceBtn)
  
    return itemContainer
  }
