const items = [

    { id: 1, item: "Item 1", status: "In Sale" },

    { id: 2, item: "Item 2", status: "New Release" },

    { id: 3, item: "Item 3", status: "New Release" },

    { id: 4, item: "Item 4", status: "In Sale" },

    { id: 5, item: "Item 5", status: "In Sale" }

];

const itemList = document.querySelector('#itemList');
const radioButton = document.getElementsByName('category');


function renderItemList(selectedValue) {

    const filteredList = selectedValue === 'all' ? items : items.filter(item => item.status === selectedValue);

    const itemListHTML = filteredList.map(item => `
    <li><strong>ID: </strong>${item.id}<br>
    <strong>Item: </strong>${item.item}<br>
    <strong>Status: </strong>${item.status}
    </li><hr>
    `);

    itemList.innerHTML = itemListHTML.join('')
}

renderItemList('all');

radioButton.forEach(radioBtn => {
    radioBtn.addEventListener('change', function () {
        renderItemList(this.value)
    })
})