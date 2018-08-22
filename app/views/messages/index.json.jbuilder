# if @new_message.present?
json.array!	@new_messages do |message|
	json.name		message.user.name
	json.date		message.created_at
	json.content	message.content
	json.image		message.image.url
	json.message_id		message.id
end
# end
# if @new_message.present?
# 	json.array! @new_message
# end