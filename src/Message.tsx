function Message(){
    const name = 'Gagani'
    if(name){
        return<h1>Hello { name }</h1>;
    }else {
        return <h1>Hello world</h1>;
    }
}
export default Message;