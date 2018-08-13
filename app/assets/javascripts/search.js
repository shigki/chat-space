$(function() {

var user_list = $("#user-search-result");

function appendUser(user) {
	var html = `<div class="chat-group-user">
								<p class="chat-group-user-name">
									${user.name}
								</p>

							</div>`
  user_list.append(html);
}

function appendNoUser(message) {
	var html = `<p class="chat-group-user-name">
									= message
								</p>`
	user_list.append(html);
}

  $('#user-search-field').on("keyup", function() {
  	var input = $(this).val();

  	$.ajax({
  		type: 'GET',
  		url: '/users',
  		data: { keyword: input },
  		dataType: 'json'
  	})
  	.done(function(users) {
  		$("#user-search-result").empty();
  		if (users.length !==0) {
  			console.log(users);
  			users.forEach(function(user){
  				appendUser(user);
  			});
  		}
  		else {
  			appendNoUser("一致するユーザーはいません")
  		}
  	})
  	.fail(function() {
  		alert('検索に失敗しました');
  	});
  });
});