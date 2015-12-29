var app = {

	createElement: function(params) {
      var element = document.createElement(params.tagName);

      console.log("params.inputType", params.inputType);

      if (params.inputType){
      	element.setAttribute('type', params.inputType);
      } else {
      	element.innerHTML = params.content;
      }

      element.className = params.className;

      

      if (params.parentElement){
      	 params.parentElement.appendChild(element);
      	}
        return element;
	}
}



var body = document.querySelector('body');


app.createElement({
   tagName: 'h1',
   className: 'title',
   content: 'Тест по програмированию',
   parent: body
});

app.createElement({
   tagName: 'input',
   inputType: 'submit',
   className: 'check-results',
   content: 'Проверить мои результаты',
   parentElement: body
});



