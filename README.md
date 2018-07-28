# README

db design

## users table
|column|Type|Options|
|------|----|-------|
|id|-|-|
|group_id|integer|foreign_key: true|
|message_id|integer||
|name|string|null: false, unique: true, add_index :users, :name|
|email||(devise), null: false, unique: true|
|password||(devise), null: false|

association
- has_many :groups, through::group_users
- has_many :group_users
- has_many :messages

## messages table
|column|Type|Options|
|------|----|-------|
|id|-|-|
|user_id|integer||
|group_id|integer|foreign_key: true|
|body|text||
|image|string||
|group_id|integer||


association
- belongs_to :group
- belongs_to :user

## groups table
|column|Type|Options|
|------|----|-------|
|id|-|-|
|user_id|integer||
|message_id|integer|foreign_key: true|
|name|string|null: false, unique: true|

association
- has_many :users, through::group_users
- has_many :group_users
- has_many :messages


## group_users table
|column|Type|Options|
|------|----|-------|
|id|-|-|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
|name|string|null: false, unique: true, add_index :users, :name|

association
- belongs_to :group
- belongs_to :user


