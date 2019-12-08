import AuthService from "../AuthService";

export default class TodoService{
    constructor(){
        this.authService = new AuthService();
    }

    getItems = async ()=>{
        return await this.authService.fetch(`${this.authService.domain}/todo`, {
            method: 'GET',
        });
    };
     addItem = async item => {
        return await this.authService.fetch(`${this.authService.domain}/todo`, {
            method: 'POST',
            body: JSON.stringify(item)
        });
    };
    removeItem = async id => {
        return await this.authService.fetch(`${this.authService.domain}/todo/${id}`, {
         method: 'DELETE'
        });
    };
}



