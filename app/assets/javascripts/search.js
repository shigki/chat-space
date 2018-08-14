$(function() {

var user_list = $("#user-search-result");
// var member_list = $("#member-search-result");

function appendUser(user) {
	var html = `<div class="chat-group-user">
								<p class="chat-group-user-name">
									${user.name}
								</p>
								<div class="chat-group-user__btn">
									<a class="chat-group-user__btn--add add_btn" data-user-id="${user.id}">
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

// function appendMember(id仮, user仮) {
// 	var = html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
//   								<input name='group[user_ids][]' type='hidden' value='${user.id}'>
//   								<p class='chat-group-user__name'>${user.name}</p>
//   								<a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
// 									</div>`
// 	member_list.append(html);
// }


  $('#user-search-field').on("keyup", function() {
  	var input = $(this).val();
  	var trimmed_input = input.trim();
  	var reg = new RegExp("^" + trimmed_input);
   	$("#user-search-result").empty();
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
  	$(document).on("click", ".add_btn", function(event){
  		console.log(event.target)
  		console.log($(event.target).data("user-id"))
  		// console.log(id)
			// ユーザーの名前がチャットメンバーに加わる(append)＆チャットメンバーを追加かから消える(remove)
  	})

  // })
  // $(function() {
  // 	$(document).on("click", "user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn", function(){
  // ユーザーの名前がチャットメンバーから消え、追加に表示される
  // 	})

  // })
});
