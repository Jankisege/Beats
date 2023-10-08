$(".interactive__avatar-link").click(e => {
e.preventDefault();

const $this = $(e.currentTarget);
const curItem = $this.closest("reviews__switcher-item")

curItem.addclass("active").siblings().removeClass("active");



})