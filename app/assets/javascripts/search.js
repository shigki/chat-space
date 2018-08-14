$(function() {

var user_list = $("#user-search-result");

function appendUser(user) {
	var html = `<div class="chat-group-user">
								<p class="chat-group-user-name">
									${user.name}
								</p>
								<div class="chat-group-user__btn">
									<a class="chat-group-user__btn--add">
										追加
									</a>
								</div>
							</div>`
  user_list.append(html);
}

function appendNoUser(message) {
	var html = `<div class="chat-group-user">
								<p class="chat-group-user-message">
									${message}
								</p>
							</div>`
	user_list.append(html);
}

  $('#user-search-field').on("keyup", function() {
  	var input = $(this).val();
  	var trimmed_input = input.trim();

  	$.ajax({
  		type: 'GET',
  		url: '/users',
  		data: { keyword: trimmed_input },
  		dataType: 'json'
  	})
  	.done(function(users) {
  		$("#user-search-result").empty();
  		if (users.length !==0) {
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
