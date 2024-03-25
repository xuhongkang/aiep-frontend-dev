'use client'
import {useState} from 'react';
import GoalCard from './GoalCard';
import { getSessionData } from './API';

export default function TranslationPage() {
    const [translationText, setTranslationText] = useState([]);
    const [pageIndex, setpageIndex] = useState(0);
    const [accessCode, setAccessCode] = useState('');
    const [isTablistVisible, setIsTablistVisible] = useState(false);
    const [isAccessCodeError, setAccessCodeError] = useState(false);

    const handleAccessCodeSubmit = (e) => {
        e.preventDefault();
        const fetchData = async (accessCode) => {
            try {
                const data = await getSessionData(accessCode)
                setTranslationText(data[0]['pages'])
                setAccessCodeError(false)
                setIsTablistVisible(true)
            } catch (error) {
                setAccessCodeError(true)
            }
        }
        if (accessCode) {
          try {
            console.log(accessCode)
            fetchData(accessCode)
          } catch (error) {
          }
        } else {
        }
        setAccessCode('')
    };

    return (
        <div className="flex flex-col h-screen w-full rounded-md p-2 md:p-6">
            <div className='pb-6 flex-none'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                    <h1 className='chatbot-text-primary text-xl md:text-2xl font-medium'>IEP Digest</h1>
                    </div>
                </div>
                <p className="text-sm md:text-base mt-2 md:mt-4">Please utilize the below tools to view your processed IEP document.</p>
            </div>
            {!isAccessCodeError ? (
                <div></div>
            ):(
                <div role="alert" className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>The Access Code You've Provided Does Not Exist, Please Try Again</span>
              </div>
            )}
            {!isTablistVisible ? (
                <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                <p className="text-sm md:text-base mt-2 md:mt-4">Please enter your access code below:</p>
                  <form onSubmit={handleAccessCodeSubmit}>
                    <input className='input input-bordered w-full max-w-xs'
                        type="text" 
                        placeholder="Enter access code" 
                        value={accessCode} 
                        onChange={(e) => setAccessCode(e.target.value)} 
                    />
                    <button className='btn btn-primary' type="submit">Submit</button>
                </form>
                </div>
              </div>
               
            ) : (
            <div role="tablist" className="tabs tabs-boxed whitespace-nowrap flex-grow items-start overflow-hidden">
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label="Academic Progress"/>
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none">Working In Progress</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label="Goals"/>
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none" id='haha'>
                    <GoalCard 
                    areaOfNeed={'Artiulation/phonology'} 
                    goalDescription={"Improve speech intelligibility at the sentence level to 70% accuracy in spontaneous conversation"}
                    progressRate={70}
                    baselineDescription={"Student's intelligibility remains around 50% when the topic is familiar to the listener. When the topic is unknown, intelligibility is <50%. When the listener indicates that they do not understand, Student rephrases her utterance in 3/5 opportunities, and uses her device to repair the breakdown in 2/5 opportunities."}
                    progessReport1Date={""}
                    progessReport1Description={""}
                    progessReport2Date={""}
                    progessReport2Description={""}
                    progessReport3Date={""}
                    progessReport3Description={""}
                    annualGoalDate={""}
                    annualGoalDescription={""}
                    />
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label="Action Items"/>
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none">Working In Progress</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label="Full Text" />
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none">
                    <div className="join p-0">
                        <button className="join-item btn" onClick={() => {setpageIndex(Math.max(pageIndex - 1, 0))}}>«</button>
                        <button className="join-item btn">Página {pageIndex+1}</button>
                        <button className="join-item btn" onClick={() => {setpageIndex(Math.min(pageIndex + 1, Math.max(translationText.length-1, 0)))}}>»</button>
                    </div>
                    <div className='leading-relaxed whitespace-pre-line overflow-y-auto'>{translationText[pageIndex]}</div>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label="Download Translation" />
                <div role="tabpanel" className="tab-content p-5 h-screen overflow-auto flex-none">
                    <iframe className='iframe h-full' src={`/iep_translated.pdf`} type="application/pdf" width='100%' height='100%' loading="lazy"/>
                </div>
            </div>)}
        </div>
    );
}