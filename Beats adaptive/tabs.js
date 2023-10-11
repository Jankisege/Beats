const findblockbealias = alias =>{
  return $(".reviews__item").filter((ndx, item)=>{
    return $(item).attr("data-linked-with") = alias 
  });
}


$(".interactive__avatar-link").click(e => {
e.preventDefault();

const $this = $(e.currentTarget);
const target = $this.attr("data-open");
const itemToShow = findBlockByAlias (target);
const curItem = $this.closest("reviews__switcher-item");

itemToShow.addclass("active").siblings().removeClass("active");
curItem.addclass("active").siblings().removeClass("active");



})