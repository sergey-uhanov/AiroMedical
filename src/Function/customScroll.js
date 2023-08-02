
 window.onload = function() {
    const scrollbars = document.querySelectorAll('.custom-scrollbar');
    scrollbars.forEach((scrollbar) => {
        scrollbar.style.scrollbarWidth = 'thin'; // Добавляет полосу скролла для Firefox
    });
};
