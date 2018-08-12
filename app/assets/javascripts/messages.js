$(function(){
	function buuildHTML(message){
		var html = `<span class="right__mid__messagelist-name">
									${message.user_name}
								</span>
								<span class="right__mid__messagelist-time">
									${message.created_at}
								</span>
								<p class="right__mid__messagelist-message">
									${message.content}
								</p>`
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
    	var html = buildHTML(data);
    	$('.right__mid__messagelist').append(html)
    	$('.right__bot__input-message').val('')
    })
  })
});
