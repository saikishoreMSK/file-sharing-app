"use client"
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import Link from 'next/link';

const Files = () => {
  const [files, setFiles] = useState([]);
  const db = getFirestore(app);

  // Fetch all files from Firestore
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "uploadedFile"));
        const fileList = querySnapshot.docs.map(doc => doc.data());
        setFiles(fileList); // Set the fetched files in the state
      } catch (error) {
        console.error("Error fetching files: ", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className='flex justify-center w-full h-screen'>
      <div className='w-[90%] p-5 m-5 h-[70%]'>
        <h2 className='text-center text-2xl font-bold'>Uploaded Files</h2>
        {files.length > 0 ? (
          <ul className='mt-4'>
            {files.map((file, index) => (
              <li key={index} className='p-2 bg-white shadow-md rounded mb-2'>
                <strong>File Name:</strong> {file.fileName} <br/>
                <strong>File Size:</strong> {(file.fileSize / 1024).toFixed(2)} KB <br/>
                <strong>File Id:</strong> {file.id} <br/>
                <a href={file.fileUrl} target='_blank' rel='noopener noreferrer' className='text-white border p-1 bg-primary outline-none rounded-md  cursor'>
                  Download
                </a>
                <Link href={`/file-preview/${file.id}`}>
                  <strong className='ml-3 text-primary cursor-pointer'>
                    View
                  </strong>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center mt-5'>No files available</p>
        )}
      </div>
    </div>
  );
};

export default Files;
