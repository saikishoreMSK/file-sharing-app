"use client"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { app } from '../../../firebaseConfig';
import FileItem from './_components/FileItem';
import Link from 'next/link';
import Image from 'next/image';

const FileView = ({params}) => {
  const fetchFiles = async () => {
    const filesCollection = collection(db, 'uploadedFile');
    const filesSnapshot = await getDocs(filesCollection);
    const filesList = filesSnapshot.docs.map(doc => {
      console.log(doc.data()); // Log the document data
      return doc.data();
    });
    setFiles(filesList);
  };
   
    const db = getFirestore(app);
    const [file,setFile] = useState();

    useEffect(()=>{
        params.fileId&&getFileInfo();
        // console.log(params.fileId);
    },[])
    const getFileInfo =async()=>{
        const docRef = doc(db, "uploadedFile", params.fileId);
        const docSnap = await getDoc(docRef); 
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setFile(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }

  return (
    <div className='bg-gray-100 items-center justify-center flex flex-col gap-4 h-screen w-full'>
        <Link href={'https://file-sharing-site-seven.vercel.app/'}>
            <Image src={'/logo.svg'} width={150} height={100}/>
        </Link>
      <FileItem file={file}/>
    </div>
  )
}

export default FileView
