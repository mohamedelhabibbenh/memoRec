import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AbsContainer,BtnClose } from '../Mo7UI.lib'
import { cols, icons, memoCols } from '../services/design.service';
export default function EditMemo(props) {
    const [tmpMemo ,setTmpMemo] = useState({title:"",favorite:false,content:'',color:cols.unclear_white})
    useEffect(() => {
        setTmpMemo(props.m);
    }, [])
    const { fn_close} = props;
    const { fn_update} = props.methods;
    const handleFav=()=>{
        let k = {...tmpMemo};
        k.favorite=!k.favorite;
        setTmpMemo(k)
        
    }
    const handleTitle=(e)=>{
        const {value}=e.target;
        let k = {...tmpMemo};
        k.title=value;
        setTmpMemo(k)
    }
    const handleContent=(e)=>{
        
        const {value}=e.target;
        let k = {...tmpMemo};
        k.content=value;
        setTmpMemo(k)
    }
    const fn_save=()=>{
        fn_update(tmpMemo.id ,tmpMemo);
        fn_close();
    }
    const fn_setColor=(col)=>{
        let k = {...tmpMemo};
        k.color=col;
        setTmpMemo(k)
    }
    return (
        <AbsContainer>
            <Container>
                <Buttons>
                    {!tmpMemo.favorite
                    ?<div onClick={() => handleFav()}><img src={icons.ic_fav} alt="" /></div>
                    :<div onClick={() => handleFav()}><img src={icons.ic_fav_fill} alt="" /></div>
                    }
                    <div onClick={() => fn_save(tmpMemo.id)}><img src={icons.ic_save} alt="" /></div>
                    <div onClick={() => fn_close()}><img src={icons.ic_close} alt="" /></div>
                </Buttons>
                <Body color={tmpMemo.color}>
                    <input onChange={(e)=>handleTitle(e)} type="text" placeholder="Title..." value={tmpMemo.title}/>
                    <textarea onChange={(e)=>handleContent(e)} placeholder="I have to remember that..." value={tmpMemo.content}/>
                </Body>
                <Buttons>
                    <div onClick={()=>fn_setColor(memoCols[0])} style={{backgroundColor:memoCols[0],height:'1.5rem',width:'1.5rem'}}></div>
                    <div onClick={()=>fn_setColor(memoCols[1])} style={{backgroundColor:memoCols[1],height:'1.5rem',width:'1.5rem'}}></div>
                    <div onClick={()=>fn_setColor(memoCols[2])} style={{backgroundColor:memoCols[2],height:'1.5rem',width:'1.5rem'}}></div>
                    <div onClick={()=>fn_setColor(memoCols[3])} style={{backgroundColor:memoCols[3],height:'1.5rem',width:'1.5rem'}}></div>
                    <div onClick={()=>fn_setColor(memoCols[4])} style={{backgroundColor:memoCols[4],height:'1.5rem',width:'1.5rem'}}></div>
                </Buttons>
            </Container>
        </AbsContainer>
    )
}

const Container = styled.div`
position:relative;
border-radius:10px;
background-color:white;
width:40%;
height:95%;
margin:1rem 0;
box-shadow:0 0 .5rem rgba(0,0,0,0.3);
:hover{
  box-shadow:0 0 .5rem rgba(0,0,0,0.6);
}
display:flex;
flex-direction:column;
justify-content:space-between;
transition: box-shadow .3s;
`;
const Buttons = styled.div`
height:10%;
display:flex;
justify-content:space-around;
align-items:center;
transition:opacity .2s;
opacity:.5;
:hover{
  opacity:1;

}
>div{
  border:2px solid ${cols.light_orange};
  border-radius:50%;
  padding:.5rem;        
  display:flex;
  justify-content:center;
  align-items:center;
  :hover{
    background-color:${cols.light_yellow};
  }
  >img{
    height:1.5rem;
    width:1.5rem;
  }
  transition:background-color .3s;
}
`;
const Body = styled.div`
border-top:1px solid ${cols.orange};
border-bottom:1px solid ${cols.orange};
height:80%;
background-color:${props=>props.color};
transition:background-color .3s;
display :flex;
flex-direction:column;
gap:1rem;
>input{
    background:transparent;
    width:70%;
    margin:0 auto;
    border-bottom:1px  solid ${cols.orangy_red};
    font-size:large;
    border-top:none;
    border-left:none;
    border-right:none;
    outline:none;
    padding:1.5rem 0;
    text-align:center;
}
>textarea{
    width:70%;
    height:20rem;

    margin:0 auto;
    background:transparent;
    text-align:left;
    outline:none;
    border:none;
    heght:70%;

}
`;

