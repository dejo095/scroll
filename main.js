const scroller = () => {

    const eventHandler = (e) => {

      const info = document.querySelector('.info');

      info.textContent = 'X = ' + window.pageXOffset + ', Y = ' + window.pageYOffset;

    };

    window.addEventListener('scroll', eventHandler, false);
    
  };
  
  document.addEventListener('DOMContentLoaded', scroller, false);