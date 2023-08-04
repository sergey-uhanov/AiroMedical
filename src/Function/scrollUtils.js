
export  function handleScroll(event, setVisibleItems, setCurrentPage, recipe, visibleItems) {
    let { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    const isScrolledToTop = scrollTop === 0;
    const isScrolledToBottom = scrollHeight - (scrollTop + clientHeight) < 400;

    // Вызываем функцию для скролла вниз
    if (isScrolledToBottom  && visibleItems <= 325) {


            setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);


        const itemsToBottom =  recipe.length - visibleItems;
        if (itemsToBottom === 5) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);

        }
    }
    // Вызываем функцию для скролла вверх
    if (isScrolledToTop && visibleItems > 15 ) {

        setVisibleItems((prevVisibleItems) => {
            const newVisibleItems = prevVisibleItems - 5;
            if (newVisibleItems < 15) {
                // Если новое количество видимых элементов меньше 15, устанавливаем его равным 15
                return 15;
            } else {
                return newVisibleItems;
            }
        });
        setTimeout(()=>{
            const elem = document.getElementById('maine')
            elem.scrollTo(0, 850)
        },0)
    }
}
