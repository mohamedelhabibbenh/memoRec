import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cols, icons } from '../services/design.service';
import bg_blur from "../assets/bg_blur.jpg";
import { Spring } from '@react-spring/core';
export default function Comp_memosRemoved(props) {
  //get data and active panel
  return (

    <Wrapper>
      <Container >
        <Cmp_Header/>

        <Cmp_Content memoList={props.memoList} methods={props.methods} />

      </Container>
    </Wrapper>



  )
}
//#region Cmp_Header
const Cmp_Header = (props) => {
  const Header = styled.div`
//border:1px solid;
position:relative;
grid-area:header;
>div{
  display :flex;
  align-items:center;
  justify-content:space-between;
  height:100%;
  width:60%;
  margin:0 auto;
  .text-link{
    font-weight:700;
    text-decoration:none;
    :hover{
      color:${cols.orangy_red} !important;
    }
    transition:color .4s;
  }
}
>img{
  position:absolute;
  height:2rem;
  bottom:calc(50% - 1rem);
}

`;
  return (<Header>
    <img src={icons.logo} alt="" />
    <div>
      <Link to='/' className="text-link"  style={{ color:cols.dark_purple }}>My Memos</Link>
      <Link to='/my_favs' className="text-link" style={{ color:cols.dark_purple }}>My Favorites</Link>
      <Link to='/removed' className="text-link" style={{ color:cols.orangy_red }} >Removed</Link>
      <Link to='/about' className="text-link"  style={{ color:cols.dark_purple }}>About</Link>

    </div>
  </Header>
  )

}

//#endregion
//#region Cmp_Content
const Cmp_Content = (props) => {

  const Header = styled.div`
  height:4rem;
  display:flex;
  align-items:center;
  border-bottom:1px solid ${cols.orangy_red};
  border-radius:30px 30px 0 0;
  >p{
    width:40%;
    margin-left:2rem;
    font-size:0.75rem;
  }
  >h2{color:${cols.dark_purple};}
`;

  const MemoListContainer = styled.div`
  display :flex;
  flex-wrap:wrap;
  margin:0 auto;
  padding:0 1rem;
  height:100%;
  width:90%;
  justify-content:center;
  gap:1rem;
  overflow-y:scroll;
  overflow-x:hidden;
  &::-webkit-scrollbar{
    background-color: rgba(0, 0, 0, .1);
    width: .3rem;
    
}

&::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: ${cols.dark_purple};
}
`;
  const Background = styled.div`
position:absolute;
z-index:-1;
// background-image:linear-gradient(15deg ,${cols.orange} ,${cols.light_orange});
background-image:url(${bg_blur});
background-repeat:no-repeat;
background-size:cover;
background-position:center;

height:50%;
border-radius:3rem;
border:2px solid white;
left:0;
right:0;

`;
  const Content = styled.div`
  // border:1px solid red;  
  position:relative;
  z-index:2;
  grid-area:content;
  display:flex;
  flex-direction:column;
  height:90%;
  overflow:hidden;
`;
  const { memoList = [] }= props;

  return (<Content >
    <Header>
      <p style={{ color: cols.white }}>memoRec<span style={{ color: cols.black }}>/Removed</span></p>
      <h2>Removed</h2>
    </Header>
    <MemoListContainer>
    {memoList.lenght > 0 ? <h5>Nothing is here :)</h5> : <></>}
      {memoList.map((m, indx) => {
        return (m.removed)
        ?(<Cmp_memo key={indx}
          methods={props.methods}
          id={m.id} title={m.title} content={m.content} favorite={m.favorite} removed={m.removed} color={m.color}
        />):''
      })}
    </MemoListContainer>
    <Background />
  </Content>
  )
}


//#endregion
//#region Cpm_Memo
const Cmp_memo = (props) => {
  const {
    title = "memo Title",
    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nulla exercitationem natus dolores illo magnam! Eaque ipsum velit aut deserunt!",
    color = cols.unclear_white,
    favorite = false,
    removed = false,
    id = 0,
  } = props;
  const { fn_view, fn_edit, fn_remove, fn_addToFavorites, fn_delete, fn_restore } = props.methods;

  const Container = styled.div`
      border-radius:20px;
      background-color:white;
      width:11rem;
      height:13rem;
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
      height:2.5rem;
      display:flex;
      justify-content:space-around;
      align-items:center;
      transition:opacity .4s;
      opacity:.3;
      :hover{
        opacity:1;

      }
      >div{
        border:2px solid ${cols.light_orange};
        border-radius:50%;
        padding:.25rem;        
        display:flex;
        justify-content:center;
        align-items:center;
        :hover{
          background-color:${cols.light_yellow};
        }
        >img{
          height:1rem;
          width:1rem;
        }
        transition:background-color .3s;
      }
      `;
      const Body = styled.div`
      border-top:1px solid ${cols.orange};
      border-bottom:1px solid ${cols.orange};
      height:8rem;
      background-color:${color};
      transition:background-color .3s;
      >h5{
        margin:.2rem 0;
        text-align:center;
        font-size:.9rem;
        font-weight:500;
        
        color:${cols.dark_purple};
      }
      >p{
        margin:.2rem auto 0 auto;
        overflow-wrap: break-word;
        text-align:center;
        width:90%;
        font-size:.8rem;
        color:${cols.dark_purple};
      }
    `;

  return (<Container>
    <Buttons>

            <div onClick={() => fn_restore(id)}><img src={icons.ic_restore} alt="" /></div>
            <div onClick={() => fn_delete(id)}><img src={icons.ic_delete} alt="" /></div>

    </Buttons>
    <Body>
      <h5>{title.slice(0, 15)}</h5>
      <p>{content.slice(0, 130)}</p>
    </Body>
    <Buttons>

    </Buttons>
  </Container>)
}
//#endregion

//#region Styled

const Container = styled.div`
  border:4px solid ${cols.white};
  border-radius:3rem;
  width:100%;
  height:100%;
  background-color:${cols.light_yellow};

  display :grid;
  grid-template-columns:1fr 10fr 1fr;
  grid-template-rows:1.5fr 10fr;
  grid-template-areas :". header ."
  ". content .";

`;

const Wrapper = styled.div`
position:absolute;
top:5%;
height:90%;
left:15%;
right:15%;

`;
//#endregion