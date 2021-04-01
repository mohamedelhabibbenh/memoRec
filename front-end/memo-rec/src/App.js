import { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from 'react-router-dom'
import bg_image from './assets/bg.jpg'
import { icons, memoCols } from './services/design.service'
import Comp_memosAll from './components/Comp_memosAll'
import memoService from "./services/memo.service";
import Comp_memoFavorites from "./components/Comp_memosFavorites";
import Comp_memoRemoved from "./components/Comp_memosRemoved";
import ViewMemo from "./components/ViewMemo";
import EditMemo from "./components/EditMemo";
import CreateMemo from "./components/CreateMemo";
export default function App() {
  const [memoList, setMemoList] = useState([])
  const [openViewMemo ,setOpenViewMemo]=useState(false); 
  const [openEditMemo ,setOpenEditMemo]=useState(false); 
  const [openCreateMemo ,setOpenCreateMemo]=useState(false); 
  const [view_edit_ID ,setView_edit_ID]=useState({}); 
  useEffect(() => {
    getMemosFromServer();
  }, [])
  const getMemosFromServer = () => {
    //get all memos from server
    memoService.getMemoList().then(response => {
      setMemoList(response.data.reverse())
    })
  }
  const fn_createMemo=(memo)=>{
    memoService.createMemo(memo).then(()=>{
      getMemosFromServer();
    })
  }
  const fn_view = (m) => {
    closeViewOrEdit();
    setOpenViewMemo(true)
    setView_edit_ID(m)
  }
  const fn_edit = (m) => {
    closeViewOrEdit();
    setOpenEditMemo(true)
    setView_edit_ID(m)
    
  }
  const fn_openCreateMemo = () => {
    closeViewOrEdit();
    setOpenCreateMemo(true)
  }
  const closeViewOrEdit=()=>{
    setOpenEditMemo(false)
    setOpenViewMemo(false)
    setOpenCreateMemo(false)
  }
  const fn_update=(id ,new_memo)=>{
    let memo = {};
    let newList = memoList.map(o => {
      if (o.id === id) {
        o.title = new_memo.title;
        o.content = new_memo.content;
        o.favorite = new_memo.favorite;
        o.color=new_memo.color;
        memo = o;
      }
      return o;
    })
    //update in frontEnd
    setMemoList(newList);
    //update in server
    memoService.updateMemo(id, memo);

  }
  const fn_remove = (id) => {
    let memo = {};
    let newList = memoList.map(o => {
      if (o.id === id) {
        o.removed = true;
        memo = o;
      }
      return o;
    })
    //update in frontEnd
    setMemoList(newList);
    //update in server
    memoService.updateMemo(id, memo);

  }
  const fn_addToFavorites = (id) => {
    let memo = {};
    let newList = memoList.map(o => {
      if (o.id === id) {
        o.favorite = !o.favorite;
        memo = o;
      }
      return o;
    })
    //update in frontEnd
    setMemoList(newList);
    //update in server
    memoService.updateMemo(id, memo);
  }
  const fn_delete = (id) => {
    memoService.deleteMemo(id).then(()=>getMemosFromServer());
    
  }
  const fn_restore = (id) => {
    //get memo list and update it
    let memo = {};
    let newList = memoList.map(o => {
      if (o.id === id) {
        o.removed = false;
        memo = o;
      }
      return o;
    })
    //update in frontEnd
    setMemoList(newList);
    //update in server
    memoService.updateMemo(id, memo);

  }

  return (
    <BrowserRouter>
      <Container>
        <Route exact path={"/"} render={(props) => <Comp_memosAll {...props} memoList={memoList} methods={{ fn_openCreateMemo,fn_view, fn_edit, fn_remove, fn_addToFavorites, fn_delete, fn_restore }}/>} />
        <Route exact path={"/my_favs"} render={(props) => <Comp_memoFavorites {...props} memoList={memoList} methods={{ fn_view, fn_edit, fn_remove, fn_addToFavorites, fn_delete, fn_restore }} />} />
        <Route exact path={"/removed"} render={(props) => <Comp_memoRemoved {...props} memoList={memoList} methods={{ fn_view, fn_edit, fn_remove, fn_addToFavorites, fn_delete, fn_restore }} />} />
        <Route exact path="/about" render={(props) => <p {...props} activePanel={3} >About</p>} />
      
      {/* Edit and View and Create memo PAnels */}
      {
      openViewMemo && !openEditMemo
        ?<ViewMemo fn_close={closeViewOrEdit} m={view_edit_ID}  methods={{ fn_edit, fn_addToFavorites, fn_remove }}/>
        :<></>
      }
        {!openViewMemo && openEditMemo
        ?<EditMemo fn_close={closeViewOrEdit} m={view_edit_ID} methods={{ fn_update }}/>
        :<></>
      }
      
      {
      openCreateMemo && !openViewMemo && !openEditMemo
        ?<CreateMemo fn_close={closeViewOrEdit} methods={{ fn_createMemo }}/>
        :<></>
      }

      </Container>
    </BrowserRouter>
  );
}
const Container = styled.div`
  position:relative;

  background:url(${bg_image});
  background-position:fixed;

  width:100vw;
  height:100vh;

  
`;
