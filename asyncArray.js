const sampleData=async()=>{
    try{
        let response=await fetch("https:www.goggle.com");
        console.log(response)
    }catch(err){
        console.log("error accessing google:"+err)
    }
}
sampleData()