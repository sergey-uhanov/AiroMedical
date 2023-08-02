

function handleContextMenu(event, id, pushSelectRecipe,listBear) {
    event.preventDefault();
    if (event.button === 2 || event.target.className === 'btn') {
        console.log(event)
        let temp = listBear.find((item) => item.id === id);
        pushSelectRecipe(temp);
    }
}

export default handleContextMenu;
