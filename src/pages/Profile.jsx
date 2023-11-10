import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { styled } from 'styled-components'
import { auth, db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { collection, disableNetwork, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import TimeLine from '../components/TimeLine'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
`
const ProfileUpload = styled.label`
    width: 80px;
    overflow: hidden;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ProfileImg = styled.img`
    width: 100%;
`
const ProfileInput = styled.input`
    display: none;
`
const Name = styled.span`
    font-size: 22px;
    text-align: center;
`

const LogBtn = styled.button`
    width: 120px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid tomato;
    color: tomato;
    background-color: transparent;
`
const EditName = styled.button`
    font-size: 12px;
    background-color: transparent;
    padding: 5px 15px;
    border: 1px solid steelblue;
    border-radius: 10px;
    color: steelblue;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
`
const NameInput = styled.input`
    display: block;
    width: 150px;
    margin: 0 auto;
    height: 25px;
    outline: none;
    border: 2px solid steelblue;
    border-radius: 20px;
    padding: 0 10px;
    margin-top: 10px;
`

const PostWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

export default function Profile() {

    const navigate = useNavigate()
    const user = auth.currentUser
    const [profile, setProfile] = useState(user.photoURL ?? null)

    const [editName, setEditName] = useState(false) //edit name state
    const [name, setName] = useState(user.displayName ?? '사용자')

    const [post, setPost] = useState([])

    const onProfileChange = async (e)=>{
        const {files} = e.target;

        if(!user) return;

        if(files && files.length === 1){
            const file = files[0]
            if(file.size > 3 * 1024 * 1024){
                alert('3MB 이하의 사진만 가능합니다.')
                return;
            }
            const locationRef = ref(storage,`profile/${user.uid}`)
            const result = await uploadBytes(locationRef,file)
            const avatarUrl = await getDownloadURL(result.ref) 
            setProfile(avatarUrl)
            await updateProfile(user,{
                photoURL : avatarUrl,
            })

        }
    } // 프로필 사진 변경함수


    const onLogOut = ()=>{
        auth.signOut()
        navigate('/login')
    }

    const onLogIn = ()=>{
        navigate('/login')
    }

    const onChangeName = (e)=>{
        setName(e.target.value)
    } //name input change event

    const onEditNameClick = async()=>{
        if(!user) return
        setEditName(true)
        if(!editName) return

        try{
            await updateProfile(user,{
                displayName : name,
            })
        }catch(e){
            console.log(e)
        }finally{
            setEditName(false)
        }
    }//name change


    const myPosts = async()=>{
        const postQuery = query(
            collection(db,'posts'),
            where("userId","==",user.uid),
            orderBy("createdAt","desc"),
            limit(25)
        )
        const snapshot = await getDocs(postQuery)
        const posts = snapshot.docs.map(doc=>{
            const {post, createdAt, userId, username, photo} = doc.data()
            return{
                post, createdAt, userId, username, photo,
                id:doc.id
            }
        })
        setPost(posts)
    } //userId와 uid가 같은 유저의 포스트를 가져옴
    useEffect(()=>{myPosts()},[])

  return (
    <>
        <Header/>

        <Wrapper>
            <ProfileUpload htmlFor='avatar'>
                
                {profile ? (<ProfileImg src={profile}/>) : (<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"></path>
                </svg>)}
            </ProfileUpload>
            
            <ProfileInput onChange={onProfileChange} id='avatar' accept='image/*' type='file' />
            
            <Name>
                {user.displayName ? user.displayName : '사용자'}
                {editName ? <NameInput onChange={onChangeName} type='text' value={name}/> : null}
                <EditName onClick={onEditNameClick}>{editName ? "이름 저장" : "이름 변경"}</EditName>
            </Name>


                {user ? (<LogBtn onClick={onLogOut}>로그아웃</LogBtn>) : (<LogBtn onClick={onLogIn}>로그인</LogBtn>)}

        </Wrapper>

        <PostWrap>
            {
                post.map(post=>(
                    <div className="postwrap" key={post.id}{...post}>
                        <span className="name">{post.username}</span>
                        <p className="posting">{post.post}</p>

                    </div>
                ))
            }
        </PostWrap>


        <Footer/>

    </>
  )
}
