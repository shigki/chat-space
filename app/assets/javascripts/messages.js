$(function(){
  function buildHTML(message){
		var html = `<div class="right__mid__messagelist__each" data-message_id="${message.id}">
                  <span class="right__mid__messagelist-name" >
  									${message.user_name}
  								</span>
  								<span class="right__mid__messagelist-time">
  									${message.created_at}
  								</span>
  								<p class="right__mid__messagelist-message">
  									${message.content}
  								</p>
                </div>`
		return html;
	}
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      // console.log(data);
    	var html = buildHTML(data);
    	$('.right__mid__messagelist').append(html)
    	$("form")[0].reset();
    	//$('.right__bot__input-message').val('')
    	var target = $(".right__mid").get(0).scrollHeight;
    	$('.right__mid').animate({scrollTop: target}, 'fast');
    })
    .fail(function(){
    	alert('error');
    })
    return false;
  })

  var interval = setInterval(function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var last_id = $(".right__mid__messagelist__each").last().data('message_id');
      console.log(last_id);
      // console.log(window.location.href);
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {
          last_id: last_id},
        dataType: 'json'
      })
      .done(function(data){
        // console.log(data);
        // 新しいメッセージがあれば
         // data.forEach(function(message){
          // 各メッセージに分けて読み込む
        data.forEach(function(a) {
          var html = buildHTML(a);
          $('.right__mid__messagelist').append(html);
        })

        $("form")[0].reset();
        var target = $(".right__mid").get(0).scrollHeight;
        $('.right__mid').animate({scrollTop: target}, 'fast');
      })
      .fail(function(data){
        alert('自動更新に失敗しました。')
      });
  } else {
      clearInterval(interval)
  }} ,5000 );
});
