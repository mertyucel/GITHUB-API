class Storage{
    static getSearchedUsersFromStorage (){
        // Tüm Kullanıcıları Al

        let users;


        if (localStorage.getItem("searched")=== null) {
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;
    }
    static addSearchedUserToStorage(username){
        // Kullanıcı Ekle

        let users = this.getSearchedUsersFromStorage();

        // IndexOF 

        if (users.indexOf(username)=== -1) {
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllSearchedUsersFromStorage(){
        // Tüm Kullanıcıları Sil
        localStorage.removeItem("searched");
    }
}