// イベントの紐づけ
$(document).ready(function(){

  // タスクの追加処理
  $("#add").click(function(){
    var task = $("#task");
    var p_tag = $("<p></p>").text(task.val());

    $("#lists").append(p_tag);
    task.val("");
  });

  // タスクの削除処理
  $("#lists").click(function(){
    event.target.remove();
  });
});
