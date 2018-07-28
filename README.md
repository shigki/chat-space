# README

db design

## users table
|column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, add_index :true|
|email||(devise), null: false, unique: true|
|password||(devise), null: false|

association
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :messages

## messages table
|column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|
|body|text||
|image|string||


association
- belongs_to :group
- belongs_to :user

## groups table
|column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

association
- has_many :users, through: :group_users
- has_many :group_users
- has_many :messages


## group_users table
|column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|referencesforeign_key: true|

association
- belongs_to :group
- belongs_to :user


