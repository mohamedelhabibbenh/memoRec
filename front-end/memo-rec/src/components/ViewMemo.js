import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AbsContainer, BtnClose } from '../Mo7UI.lib'
import { cols, icons } from '../services/design.service';
export default function ViewMemo(props) {
    const [tmpMemo, setTmpMemo] = useState({ title: "", favorite: false, content: '', color: cols.unclear_white })
    useEffect(() => {
        setTmpMemo(props.m);
    }, [])
    const { fn_addToFavorites } = props.methods;
    const handleFav = () => {
        let k = { ...tmpMemo };
        k.favorite = !k.favorite;
        setTmpMemo(k)
    }
    const { fn_close } = props;
    const { fn_edit } = props.methods;
    return (
        <AbsContainer>
            <Container>
                <Buttons>
                    <div onClick={() => fn_edit(tmpMemo)}><img src={icons.ic_edit} alt="" /></div>
                    <div onClick={() => fn_close()}><img src={icons.ic_close} alt="" /></div>
                </Buttons>
                <Body color={tmpMemo.color}>
                    <h5 style={{ padding: "2rem 0" }}>{tmpMemo.title}</h5>
                    <p>{tmpMemo.content}</p>
                </Body>
                <Buttons>

                    {
                        !tmpMemo.favorite
                            ? <div onClick={() => { fn_addToFavorites(tmpMemo.id); handleFav() }}><img src={icons.ic_fav} alt="" /></div>
                            : <div onClick={() => { fn_addToFavorites(tmpMemo.id); handleFav() }}><img src={icons.ic_fav_fill} alt="" /></div>
                    }
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
transition:opacity .4s;
opacity:.3;
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
background-color:${props => props.color};
transition:background-color .3s;
>h5{
  margin:.2rem 0;
  text-align:center;
  font-size:.9rem;
  font-weight:500;
  
  color:${cols.dark_purple};
}
>p{
  margin-top:.2rem;
  text-align:center;
  font-size:.8rem;
  color:${cols.dark_purple};
}
`;

