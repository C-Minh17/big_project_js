export function dataApi(link){
    let  api= fetch(link)
    .then ((databases)=>{
        return databases.json()
    })
    .then((data)=>{
        return data
    })
    return api
}
"https://api-project-js.vercel.app/api"