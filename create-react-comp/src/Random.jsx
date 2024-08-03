function Random(){

let random = Math.round(Math.random() * 100);
return <h3 style={{'backgroundColor':'gray'}}>
    NUmber is {random};
</h3>
 
}
export default Random;