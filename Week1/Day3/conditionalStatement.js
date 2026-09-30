// use if & else when you know the range conditions or if multile logical operater is required

let marks = 40

if (marks>80){
    console.log('Distinction');
}
else if(marks>60)
    {
    console.log('First class');
}
else if(marks<30){
    console.log("Failed")
}
else{
    console.log('Second Class')
}


//use switch when one varible have many fixed value



let alerttype = "modal"

switch(alerttype){
    case "simple":
        console.log('simple alert');
        case "prompt":
            console.log('prompt aleart');
            default:
                console.log('invalid')
}

