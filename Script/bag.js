

let bagItemObjects;
onLoad();

function onLoad(){
  bagItemContainer();
  loadBagitemObjects();
}

function loadBagitemObjects() {
console.log(bagItems);
  bagItemObjects =  bagItems.map(itemId =>{
    for(let i=0; i<items.length; i++){
      if (itemId === items[i].id){
        return items[i];
    }
  }
  })
 
  console.log(bagItemObjects);

}

function bagItemContainer(){
  
  let bagContainerElement = document.querySelector('.bag-items-container')

let innerHTML = "";
bagItemObjects.forEach(bagItem => {
  innerHTML += GenerateItemHtml(bagItem);
});

  


  bagContainerElement.innerHTML = innerHTML;
  
}


function clickToRemove(itemId){
 bagItems = bagItems.filrer(bagItemId => bagItemId != itemId)
localStorage.setItem('bagItems', JSON.stringify(bagItems))
loadBagitemObjects();
bagItemContainer();



}
function GenerateItemHtml (item){
return `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="../${item.image}">
</div>
<div class="item-right-part">
  <div class="company">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price-container">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.orignal_price}</span>
    <span class="discount-percentage">(${item.discount}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${item.return_period} days</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${item.delviery_date}</span>
  </div>
</div>

<div class="remove-from-cart" onclick="clickToRemove(item.id)">X</div>
</div>`
}