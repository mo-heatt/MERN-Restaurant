async function ImagetoBase64(file){
    const reader = new FileReader()  //declaration to read the file
    reader.readAsDataURL(file)  //read the file as URL

    const data = new Promise((resolve,reject)=>{      //to check if the file is converted or not
        reader.onload = ()=> resolve(reader.result)   //if done return result
        reader.onerror = err => reject(err)           //if error reject
    })
    return data
}

export {ImagetoBase64};

