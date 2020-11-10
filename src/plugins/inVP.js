function isInViewport(element) {
  if (!element) {
    console.log('Element not found!');
    return undefined;
  }

  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}


export default isInViewport;