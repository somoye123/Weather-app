/* eslint-disable import/no-cycle, no-alert */
import AppLogic from './logicModule';
import handleForm from './formHandler';

export default (() => {
  const tempsButtons = () => {
    const celcius = document.getElementById('celcius');
    const farenheit = document.getElementById('farenheit');
    celcius.addEventListener('click', () => {
      celcius.className = 'active';
      farenheit.className = '';

      const celSpan = document.querySelectorAll('#celcius-temp');
      celSpan.forEach((element) => {
        element.className = '';
      });
      const farSpan = document.querySelectorAll('#farenheit-temp');
      farSpan.forEach((element) => {
        element.className = 'hide';
      });
    });
    farenheit.addEventListener('click', () => {
      celcius.className = '';
      farenheit.className = 'active';

      const celSpan = document.querySelectorAll('#celcius-temp');
      celSpan.forEach((element) => {
        element.className = 'hide';
      });
      const farSpan = document.querySelectorAll('#farenheit-temp');
      farSpan.forEach((element) => {
        element.className = '';
      });
    });
  };

  
  return { tempsButtons };
})();
