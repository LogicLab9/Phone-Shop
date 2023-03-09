export class ApiConfig{
  static readonly API_URL="http://127.0.0.1/Logic_Labs/Phone-Shop/PhoneShopServer"
  static createURL(query:String){
    return`${this.API_URL}/${query}`
  }
}
