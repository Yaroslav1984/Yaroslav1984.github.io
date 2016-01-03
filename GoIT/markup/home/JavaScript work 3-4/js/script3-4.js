var app = {
	createElement: function(params) {
      var element = document.createElement(params.tagName);
 
      if (params.inputType){
      	element.setAttribute('type', params.inputType);
      } 
        
      if (params.className){    
         element.className = params.className;
      }

      if (params.content){
         element.innerHTML = params.content;
      }

      if (params.parentElement){
      	 params.parentElement.appendChild(element);
      	}

        return element;
	     },
        generateQuestions: function(guestionsAmount, answersAmount) { 

        for (var i = 0; i < guestionsAmount; i++) {

          this.createElement({
            tagName: 'h2',
            content: 'Вопрос №' + (i + 1),  
            parentElement: body
        });

         for (var j = 0; j < answersAmount; j++) {
            this.createElement({
            tagName: 'label',
            content: '<input type="checkbox" /> Вариант ответа №' + (j + 1),
            parentElement: body
        });
       }
    };
  }
}


var body = document.querySelector('body');


app.createElement({
   tagName: 'h1',
   content: 'Тест по програмированию',
   parent: body
});

var form = app.createElement({
   tagName: 'form',
   parentElement: body
});

app.generateQuestions(3,3);

app.createElement({
   tagName: 'input',
   inputType: 'submit',
   className: 'check-results',
   content: 'Проверить мои результаты',
   parentElement: body
});


