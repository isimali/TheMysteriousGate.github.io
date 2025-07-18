
const cursor = document.querySelector('.custom-cursor');

// 跟随鼠标移动
document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// 点击效果
document.addEventListener('mousedown', () => {
  cursor.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicked');
});

// 悬停效果
const interactive = document.querySelectorAll('a, button');
interactive.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});
document.addEventListener('mousemove', function(e) {
  // 获取鼠标当前位置的元素
  let elements = document.elementFromPoint(e.clientX, e.clientY);

  if(elements.id=="errors" || document.querySelector('.error-page')){
    cursor.style.filter = 'drop-shadow(0 0 5px red)';
  }else if(elements.id=="history_book"){
    cursor.style.filter = 'drop-shadow(0 0 5px yellow)';
  }
  else{
    cursor.style.filter = '';
  }
});