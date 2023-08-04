

function handleContextMenu(event, id, pushSelectRecipe,delSelectRecipe, listBear, selectRecipe) {
    event.preventDefault();
    if (event.button === 2 || event.target.className === 'btn') {
        let temp = listBear.find((item) => item.id === id);

        // Проверяем, есть ли объект с таким id в listSelectRecipe
        const existingIndex = selectRecipe.findIndex((item) => item.id === id);

        if (existingIndex == -1) {

            // Если объекта с таким id нет, добавляем его в массив
            pushSelectRecipe(temp);
        } else {

            // Если объект с таким id уже есть, удаляем его из массива
            delSelectRecipe(id);
        }
    }
}


export default handleContextMenu;
