Trao đổi với Tùng về một số cách xử lý với Module Nhân Viên

### User.Schema.json
```
{
  //required/ readonly 
  //validation
}
```

### User.perssion
```
{
  emptyUser:  POST
  SeletedUser  : View(GET)/ Edit (PUT)/ Delete (DELETE)
  Users : VIEW (GET), DELETE

}
```

### User.js 
//public data
```json
list<User> Users
User SelectedUser  
User emptyUser 
list<User> selecteUsers
```
//public function
```
bool New()  -> emptyUser
bool View()    -> selectedUser
bool  Edit()  -> selectedUser
bool Delete()  -> selectedUser
   DeleteAll() -> 
```
