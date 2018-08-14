$(function() {

var user_list = $("#user-search-result");

function appendUser(user) {
	var html = `<div class="chat-group-user">
								<p class="chat-group-user-name">
									${user.name}
								</p>
								<div class="chat-group-user__btn">
									<a id="add-btn"  class="chat-group-user__btn--add">
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
  	var reg = new RegExp("^" + trimmed_input);
   	$("#user-search-result").empty();
   	// console.log(reg);
  	$.ajax({
  		type: 'GET',
  		url: '/users',
  		data: { keyword: trimmed_input },
  		// なぜkeyword: regが読めないのか
  		dataType: 'json'
  	})
  	.done(function(users) {
  		$("#user-search-result").empty();
  		// if ($('#user-search-field').val() == 0) {
  		// 	users = ""
  		// }
  		// 磯田さん加筆

  		if (users.length !== 0) {
  			users.forEach(function(user){
  				console.log(user);
  				appendUser(user);
  			});
  		}
  		else {
  			appendNoUser("一致するユーザーはいません")
   		// $("#user-search-result").empty();
   		// 磯田さん加筆
  		}
  	})
  	.fail(function() {
  		alert('検索に失敗しました');
  	});
  });

  // $(function() {
  // 	$(document).on("click", )

  // })
});
