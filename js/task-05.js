const refs = {
  input: document.querySelector('[id="name-input"]'),
  output: document.querySelector('[id="name-output"]'),
  spanEl: document.querySelector('span')
  }

refs.input.addEventListener('input', onInputChange);

  function onInputChange (event) {
    const value = event.currentTarget.value.trim();
    refs.output.textContent = value || 'Anonymous';
    
  }