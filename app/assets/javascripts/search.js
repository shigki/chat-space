$(function() {
  $('#user-search-field').on("keyup", function() {
  	var input = $(this).val();

  	$ajax({
  		type: 'GET',
  		url: '',
  		data: { keyword: input },
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
  			appendNoUser("一致するグループはありません")
  		}
  	})
  });
});