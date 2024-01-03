



let bagItems ;
onLoad();
function onLoad() {
let bagItemsStr =localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr): [];
  displayitemOnHomepage();
  displayBagCount();
}


function addToBag (itemId){
bagItems.push(itemId)
localStorage.setItem('bagItems', JSON.stringify(bagItems))
displayBagCount()

}
function displayBagCount (){


  let count=document.querySelector(".bag-count");
  if(bagItems.length > 0){
    count.style.visibility = 'visible'
  count.innerText = bagItems.length
  } else{
    count.style.visibility = 'hidden'
  }
}


function displayitemOnHomepage () {

  let itemsContainerElement = document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }  
  let innerHtml = '';
  
  items.forEach(item =>{
  
  innerHtml +=            
  `<div class="item-container">
  <img class="item-img" src="${item.image}" alt="item image">
  <div class="rating">
      ${item.rating.stars}⭐|${item.rating.count}
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="pricing">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="orignal-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount}% OFF)</span>
  </div>
  <button class="btn-add" onclick="addToBag (${item.id})">Add to Bag</button>
  </div>`;
  })

  itemsContainerElement.innerHTML = innerHtml;

}


