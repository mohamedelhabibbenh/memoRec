import axios from "axios";


const URL='http://localhost:8080/api/v1'
class MemoService{
    
    getMemoList()
    {
        return axios.get(URL+"/memo_list")
    }
    getMemoById(id){
        return axios.get(URL+"/memo/"+id)

    }
    createMemo(memo)
    {
        return axios.post(URL+"/memo/create" ,memo)
    }
    updateMemo(id ,memo)
    {
        return axios.put(URL+"/memo/"+id ,memo)
        
    }
    deleteMemo(id)
    {
        return axios.delete(URL+"/memo/"+id)

    }
}
export default new MemoService()

    // setMemoList([
    //   // {id:1 ,color:memoCols[0],title:"remeber to  do this",content:"i  saw tye movies in th edarl hahah" ,isFavorite:false ,isRemoved:false},
    //   // {id:2 ,color:memoCols[1],title:"Lorem, ipsum d",content:" amet consectetur adipisicing e" ,isFavorite:true ,isRemoved:false},
    //   // {id:3 ,color:memoCols[2],title:"es, velit nobis? Repudi",content:"epudiandae numquam in necessitatibus?" ,isFavorite:false ,isRemoved:false},
    //   // {id:4 ,color:memoCols[3],title:"iores, velit nobis? Repudia",content:"hahaha ahaha ahaha ahahahah ahah" ,isFavorite:false ,isRemoved:false},
    //   // {id:5 ,color:memoCols[4],title:"amet consectetur adipisicing elit. Ma",content:"psum dolor sit amet consectetur adipisicing elit. Maiores, velit nobis? Repudiandae numquam i" ,isFavorite:true ,isRemoved:false},
    // ])