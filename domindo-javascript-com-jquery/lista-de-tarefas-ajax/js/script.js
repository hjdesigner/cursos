$(function(){
  var my_login = 'hjdesigner23@gmail.com';
  var server = 'http://livro-capitulo07.herokuapp.com';

  var $lastClicked;  

  function savePendingEdition($task){
    var text = $task.children('.task-edit').val();
    $task.empty();
    $task.append("<div class='task-text'>" + text + "</div>")
           .append("<div class='task-delete'></div>")
           .append("<div class='clear'></div>");
    $('.task-delete').click(onTaskDeleteClick);
    $task.click(onTaskItemClick);
  }
  function onTaskEditKeydown(event){
    if(event.which === 13){
      savePendingEdition($lastClicked);
      $lastClicked = undefined;
    }
  }
  function onTaskItemClick(){
    if(!$(this).is($lastClicked)){
      if($lastClicked !== undefined){
        savePendingEdition($lastClicked);
      }
      $lastClicked = $(this);
      var text = $lastClicked.children('.task-text').text();
      var html = "<input type='text' class='task-edit' value='"+ text +"'>";
      $lastClicked.html(html);
      $('.task-edit').keydown(onTaskEditKeydown);
    }    
  }
  function onTaskDeleteClick(){
    $(this).parent('.task-item').off('click').hide('slow', function(){
      $(this).remove();
    });
  }
  function addTask(text, id){
    id = id || 0;

    var $task = $('<div />')
                .addClass('task-item')
                .append($('<div />')
                        .addClass('task-text')
                        .text(text))
                .append($('<div />')
                        .addClass('task-delete'))
                .append($('<div />')
                        .addClass('clear'));
    $('#task-list').append($task);
    $('.task-delete').click(onTaskDeleteClick);
    $('.task-item').click(onTaskItemClick);
  }
  function onTaskKeydown(event){
    if(event.which === 13){
      addTask($('#task').val());
      $('#task').val('');
    }
  }  
  function loadTask(){
    $('#task').empty();

    $.getJSON(server + '/tarefas', {user: my_login})
      .done(function(data){
        console.log('data: ', data );
        for(var task = 0; task < data.length; task++){
          addTask(data[task].text, data[task].id);
        }
      });
  }
  $('.task-item').click(onTaskItemClick);
  $('.task-delete').click(onTaskDeleteClick);  
  $("#task").keydown(onTaskKeydown);
  loadTask();
});