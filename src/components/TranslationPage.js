'use client'
import {useState} from 'react';

export default function TranslationPage({translationFile, translationText}) {
    const [pageIndex, setpageIndex] = useState(0);

    return (
        <div className="card-body h-screen">
            <div className="join p-0">
                <button className="join-item btn" onClick={() => {setpageIndex(Math.max(pageIndex - 1, 0))}}>«</button>
                <button className="join-item btn">Página {pageIndex+1}</button>
                <button className="join-item btn" onClick={() => {setpageIndex(Math.min(pageIndex + 1, Math.max(translationFile.length-1, 0)))}}>»</button>
            </div>
            <h2 className="card-title text-primary bg-inherit">{translationText}</h2>
            <text className='leading-relaxed whitespace-pre-line overflow-auto'>{translationFile[pageIndex]}</text>
        </div>
    );
}