# README
------------------------------
tech::expert 33　Shigeki Uchida
Chat-Space
------------------------------

db design
------------------------------
## users table
|column|Type|Options|
|------|----|-------|
|id|-|-|
|user_id|integer||
|group_id|integer|foreign_key: true|
|message_id|integer||
|name|string|null: false, unique: true, add_index :users, :name|
|email||(devise), null: false, unique: true|
|password||(devise), null: false|

###association
- has_many :groups, through::group_users
- has_many :group_users
- has_many :messages

--------------------------------
##messages tabel
|id|-|-|
|user_id|integer|foreign_key: true|
|body|text||
|image|string||
|group_id|integer|foreign_key: true|

###association
- belongs_to :group
- belongs_to :user

---------------------------------
##groups table
|id|||
|user_id|integer|foreign_key: true|
|message_id|integer|foreign_key: true|
|name|string|null: false, unique: true|

###association
- has_many :users, through::group_users
- has_many :group_users
- has_many :messages

----------------------------------
##group_users
|id|||
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|


###association
- belongs_to :group
- belongs_to :user

-----------------------------------