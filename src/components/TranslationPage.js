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
    areaOfNeed={"Comprehension"}
    goalDescription={"By 08/28/2024, [NAME REDACTED] will be able to use active reading skills like highlighting subjects, places, or times, in order to respond to literal questions about an independent level text with 80% accuracy."}
    progressRate={50}
    baselineDescription={"[NAME REDACTED] is responding to literal questions about an independent level text with 50% accuracy."}
    progessReport1Date={"N/A"}
    progessReport1Description={"Summary of Progress:"}
    progessReport2Date={"N/A"}
    progessReport2Description={"Summary of Progress:"}
    progessReport3Date={"N/A"}
    progessReport3Description={"Summary of Progress:"}
    annualGoalDate={"8/28/2024"}
    annualGoalDescription={"By 08/28/2024, [NAME REDACTED] will be able to use active reading skills like highlighting subjects, places, or times, in order to respond to literal questions about an independent level text with 80% accuracy."}/><GoalCard 
    areaOfNeed={"Writing Composition"}
    goalDescription={"By 08/28/2024, [NAME REDACTED] will be able to use a word bank of temporal words like first, then, and next, as well as a bank of descriptive words, in order to complete a 1 paragraph piece that coherently describes a familiar process like her morning routine with 75% accuracy across 4/5 trials."}
    progressRate={0}
    baselineDescription={"[NAME REDACTED] is writing pieces with a clear beginning, middle and end with 25% accuracy and few qualifying details."}
    progessReport1Date={""}
    progessReport1Description={""}
    progessReport2Date={""}
    progessReport2Description={""}
    progessReport3Date={""}
    progessReport3Description={""}
    annualGoalDate={"8/28/2024"}
    annualGoalDescription={"By 08/28/2024, [NAME REDACTED] will be able to use a word bank of temporal words like first, then, and next, as well as a bank of descriptive words, in order to complete a 1 paragraph piece that coherently describes a familiar process like her morning routine with 75% accuracy across 4/5 trials."}/><GoalCard 
    areaOfNeed={"Applied Math"}
    goalDescription={"By 08/28/2024, when given a set of single step word problems with addition and subtraction within 100 at her independent reading level, [NAME REDACTED] will follow four steps: (1) read the problem and restate the story, (2) identify the relevant quantities, (3) set up the equation, and (4) perform the necessary calculations accurately completing 3/4 steps or 75% of the process across 5 problems."}
    progressRate={75}
    baselineDescription={"[NAME REDACTED] is able to complete 6/10 addition and subtraction problems within 100 with regrouping. She has 100Y nner thee coe eh size (to) bt accur with r numb next 5"}
    progessReport1Date={""}
    progessReport1Description={""}
    progessReport2Date={""}
    progessReport2Description={""}
    progessReport3Date={""}
    progessReport3Description={""}
    annualGoalDate={"9/28/2024"}
    annualGoalDescription={"By 08/28/2024, when given a set of single step word problems with addition and subtraction within 100 at her independent reading level, [NAME REDACTED] will follow four steps: (1) read the problem and restate the story, (2) identify the relevant quantities, (3) set up the equation, and (4) perform the necessary calculations accurately completing 3/4 steps or 75% of the process across 5 problems."}/><GoalCard 
    areaOfNeed={"Articulation/Phonology"}
    goalDescription={"During structured therapy activities, [NAME REDACTED] will improve her speech intelligibility at the sentence level to 70% accuracy in spontaneous conversation. When the listener indicates that he/she doesn't understand, [NAME REDACTED] will use her AAC device and/or rephrase her utterance, in 4/5 opportunities."}
    progressRate={50}
    baselineDescription={"[NAME REDACTED]'s intelligibility remains around 50% when the topic is familiar to the listener. When the topic is unknown, intelligibility is 50%. When the listener indicates that they do not understand, [NAME REDACTED] rephrases her utterance in 3/5 opportunities, and uses her device to repair the breakdown in 2/5 opportunities."}
    progessReport1Date={""}
    progessReport1Description={""}
    progessReport2Date={""}
    progessReport2Description={""}
    progessReport3Date={""}
    progessReport3Description={""}
    annualGoalDate={"8/28/2024"}
    annualGoalDescription={"During structured therapy activities, [NAME REDACTED] will improve her speech intelligibility at the sentence level to 70% accuracy in spontaneous conversation. When the listener indicates that he/she doesn't understand, [NAME REDACTED] will use her AAC device and/or rephrase her utterance, in 4/5 opportunities."}/><GoalCard 
    areaOfNeed={"Expressive language"}
    goalDescription={"During structured therapy activities, [NAME REDACTED] will produce sentences with correct Subject-Verb-Object order, with appropriate modifiers (articles, adjectives, adverbs) and necessary conjunctions and/or prepositions, utilizing correct verb tenses, in 4/5 opportunities across 4 data collection sessions."}
    progressRate={50}
    baselineDescription={"[NAME REDACTED] continues to make errors in language form (morphology, syntax, and grammar) in 4/5 opportunities. These errors, in addition to articulation errors, make it difficult for the listener to understand what [NAME REDACTED] is trying to say."}
    progessReport1Date={""}
    progessReport1Description={""}
    progessReport2Date={""}
    progessReport2Description={"Ss Progress Report"}
    progessReport3Date={""}
    progessReport3Description={"Summary of Progress:"}
    annualGoalDate={"8/28/2024"}
    annualGoalDescription={"During structured therapy activities, [NAME REDACTED] will produce sentences with correct Subject-Verb-Object order, with appropriate modifiers (articles, adjectives, adverbs) and necessary conjunctions and/or prepositions, utilizing correct verb tenses, in 4/5 opportunities across 4 data collection sessions."}/><GoalCard 
    areaOfNeed={"Decoding"}
    goalDescription={"[NAME REDACTED] will be able to identify syllable patterns CV, VC, CVC, CCVC, CCVCC, and CVCC to regularly spelled decodable words and apply appropriate phonetic rules (i.e. short v. long vowel sounds) while reading instructional level texts with 80% accuracy as measured by teacher charted records and student work samples."}
    progressRate={80}
    baselineDescription={"Keiry is decoding CVC words in isolation in the resource setting with 80% accuracy."}
    progessReport1Date={"3/7/2023"}
    progessReport1Description={"[NAME REDACTED] works on segmenting and blending in the resource room. She is able to decode CVC words with 90% accuracy."}
    progessReport2Date={""}
    progessReport2Description={"Summary of Progress: [NAME REDACTED] works on segmenting and blending in the resource room. She is able to decode CVC words with 90% accuracy. She is working on digraphs (sh, ch, th) and consonant blends (fr, sl, br, etc.). When decoding these words, she successfully blends 25% of them."}
    progessReport3Date={""}
    progessReport3Description={"Summary of Progress: [NAME REDACTED] works on segmenting and blending in the resource room. She is able to decode CVC words with 90% accuracy. She is working on digraphs (sh, ch, th) and consonant blends (fr, sl, br, etc.). When decoding these words, she successfully blends 25% of them."}
    annualGoalDate={"8/30/2023"}
    annualGoalDescription={"[NAME REDACTED] will be able to identify syllable patterns CV, VC, CVC, CCVC, CCVCC, and CVCC to regularly spelled decodable words and apply appropriate phonetic rules (i.e. short v. long vowel sounds) while reading instructional level texts with 80% accuracy as measured by teacher charted records and student work samples."}/><GoalCard 
    areaOfNeed={"Sight Word Recognition"}
    goalDescription={"by 8/30/2023, verbally or through her AAC device, [NAME REDACTED] will be able to articulate 93/93 Fundations Level 1 sight words in isolation across 4/5 trials as measured by teacher charted records and student work samples."}
    progressRate={65}
    baselineDescription={"Keiry can identify 63/93 Fundations Level 1 sight words."}
    progessReport1Date={"3/7/2023"}
    progessReport1Description={"progress report 1 details"}
    progessReport2Date={""}
    progessReport2Description={"progress report 2 details"}
    progessReport3Date={""}
    progessReport3Description={"progress report 3 details"}
    annualGoalDate={"8/30/2023"}
    annualGoalDescription={"by 8/30/2023, verbally or through her AAC device, [NAME REDACTED] will be able to articulate 93/93 Fundations Level 1 sight words in isolation across 4/5 trials as measured by teacher charted records and student work samples."}/><GoalCard 
    areaOfNeed={"Measurable Annual Goal #"}
    goalDescription={"By 8/30/23, given 5 addition and/or subtraction word problems with solutions up to 100, read independently or with teacher support, and provided scaffolds for setting up each problem (e.g. Baseline: guiding questions, highlighting), Keiry will solve by using an equation with 80% accuracy for 2 out of 3 problem sets."}
    progressRate={60}
    baselineDescription={"Given a set of 5 addition and/or subtraction word problems with solutions up to 100, read independently or with teacher support, and after highlighting key details (e.g. values, words that indicate sign) with teacher guidance, Keiry will solve by completing a blank equation template, with 80% accuracy for 2 out of 3 problem sets."}
    progessReport1Date={"3/7/2023"}
    progessReport1Description={"In the resource room, [NAME REDACTED] is working on addition and subtraction. Her preferred method is the number line. She is able to calculate correct responses in 75% of problems within 50. She also needs an explicit reminder prior to starting the exercise. After modeling, she was able to correctly identify whether she had to add or subtract, correctly placed the first number on the line, knew which way to go for adding versus subtracting, and made the correct number of jumps. She needed the number line drawn for her in these cases."}
    progessReport2Date={"None"}
    progessReport2Description={"None"}
    progessReport3Date={"None"}
    progessReport3Description={"None"}
    annualGoalDate={"8/30/23"}
    annualGoalDescription={"By 8/30/23, given 5 addition and/or subtraction word problems with solutions up to 100, read independently or with teacher support, and provided scaffolds for setting up each problem (e.g. Baseline: guiding questions, highlighting), Keiry will solve by using an equation with 80% accuracy for 2 out of 3 problem sets."}/><GoalCard 
    areaOfNeed={"Place Value"}
    goalDescription={"By 8/30/23, given two numbers within 1,000, [NAME REDACTED] will compare the numbers using place value strategies (e.g., comparing hundreds, tens, and ones, building a representation) and represent the comparison with symbols , , or , for 4 out of 5 problems."}
    progressRate={10}
    baselineDescription={"Short-Term Objective"}
    progessReport1Date={"3/7/2023"}
    progessReport1Description={"[NAME REDACTED] correctly identifies 3 that are greater than, or equal to set with 100% accuracy."}
    progessReport2Date={""}
    progessReport2Description={"Summary of Progress: [NAME REDACTED] responding correctly to 3/5 problem sets of unequal numbers but her accuracy improves to 100% after:"}
    progessReport3Date={""}
    progessReport3Description={"Summary of Progress: Summary of Progress: Comments:"}
    annualGoalDate={"8/30/2022"}
    annualGoalDescription={"By 8/30/23, given two numbers within 1,000, [NAME REDACTED] will compare the numbers using place value strategies (e.g., comparing hundreds, tens, and ones, building a representation) and represent the comparison with symbols , , or , for 4 out of 5 problems."}/><GoalCard 
    areaOfNeed={"Articulation/Phonology"}
    goalDescription={"During therapy activities, [NAME REDACTED] will improve her speech intelligibility at the sentence level to 80% accuracy in spontaneous conversation. When the listener indicates that he/she doesn't understand, [NAME REDACTED] will use her AAC device and/or rephrase her utterance, in 4/5 opportunities."}
    progressRate={50}
    baselineDescription={"Keiry produces previously learned 3-5 word functional phrases with 60% accuracy in 4/5 opportunities during structured conversation and therapy activities."}
    progessReport1Date={"11/1/2022"}
    progessReport1Description={"[NAME REDACTED] Summary of Progress: [NAME REDACTED] remains at baseline. Intelligence"}
    progessReport2Date={"2/17/2023"}
    progessReport2Description={"Progress Report 3: 5/18/2023 Goal: Annual Reviewary of Progress: [NAME REDACTED] Summary of Progress: [NAME REDACTED]'s Date: 8/29/2023 , intelligibility remains around 60% intelligibility remains around 50% Goal met Yes: No No: Yes"}
    progessReport3Date={"5/18/2023"}
    progessReport3Description={"Goal: Annual Reviewary of Progress: [NAME REDACTED] Summary of Progress: [NAME REDACTED]'s Date: 8/29/2023 , intelligibility remains around 60% intelligibility remains around 50% Goal met Yes: No No: Yes"}
    annualGoalDate={"8/30/2023"}
    annualGoalDescription={"During therapy activities, [NAME REDACTED] will improve her speech intelligibility at the sentence level to 80% accuracy in spontaneous conversation. When the listener indicates that he/she doesn't understand, [NAME REDACTED] will use her AAC device and/or rephrase her utterance, in 4/5 opportunities."}/><GoalCard 
    areaOfNeed={"Receptive language"}
    goalDescription={"During structured therapy activities, Keiry will correctly follow one- and two-step directions that contain temporal and spatial terms (before, after, first, second, third, etc, last, left, right, between, in front of) and terms of inclusion/exclusion (all, except, etc), with 80% accuracy."}
    progressRate={60}
    baselineDescription={"During structured therapy activities, [NAME REDACTED] responds with 56% accuracy to singles-step instructions that contain modifiers, temporal sequences, spatial sequences, serial orientation, with 50% accuracy to comprehension questions about a one-sentence story that has been read aloud. Types of errors when following spoken instructions: incorrect temporal sequencing (after/before, at the same time/before), incorrect spatial sequencing (first/third, first/last), incorrect serial orientation (put blocks together when told to touch all except one; touched all the blocks instead of touching all except one). When Keiry is provided with visuals (eg flash cards, pictures) and asked questions about them, her accuracy improves to 90%."}
    progessReport1Date={"11/1/2022"}
    progessReport1Description={"[NAME REDACTED] Summary of Progress: Remains at baseline."}
    progessReport2Date={"2/17/2023"}
    progessReport2Description={"During structured therapy activities, Keiry..."}
    progessReport3Date={"5/18/2023"}
    progessReport3Description={"Progressed maintained."}
    annualGoalDate={"8/30/23"}
    annualGoalDescription={"During structured therapy activities, Keiry will correctly follow one- and two-step directions that contain temporal and spatial terms (before, after, first, second, third, etc, last, left, right, between, in front of) and terms of inclusion/exclusion (all, except, etc), with 80% accuracy."}/><GoalCard 
    areaOfNeed={"Expressive communication"}
    goalDescription={"During structured therapy activities, [NAME REDACTED] will ask and answer wh- questions with 80% accuracy to demonstrate understanding of key details in a grade-level text."}
    progressRate={50}
    baselineDescription={"Expressive communication"}
    progessReport1Date={"11/1/2022"}
    progessReport1Description={"Summary of Progess: When told..."}
    progessReport2Date={"2/17/2023"}
    progessReport2Description={"Summary of Progress: When told..."}
    progessReport3Date={"5/18/2023"}
    progessReport3Description={"Summary of Progress: Very..."}
    annualGoalDate={"8/30/2023"}
    annualGoalDescription={"During structured therapy activities, [NAME REDACTED] will ask and answer wh- questions with 80% accuracy to demonstrate understanding of key details in a grade-level text."}/><GoalCard 
    areaOfNeed={"Fine Motor"}
    goalDescription={"By 8/30/2023, Keiry will display improved fine motor skills to meet the measurable objectives for increased independence and greater success in classroom activities, given adaptive materials/tools and verbal cues as needed, in 4 out of 5 opportunities."}
    progressRate={50}
    baselineDescription={"Keiry can now copy at least 2 sentences composed of 5 - 8 words with appropriate spacing between words. She shows directionality of letters and words, figure closure, and is able to draw shapes such as a rectangle, triangle, and a square."}
    progessReport1Date={"11/18/2022"}
    progessReport1Description={"[NAME REDACTED] showed minimal improvement with drawing skills; he can now produce a recognizable rectangle and a house with minimal cues and prompts in 3/5 trials. During writing tasks, she can now form descending lowercase letters g, j, p, and q with correct line placement 70% of the time."}
    progessReport2Date={"3/6/2023"}
    progessReport2Description={"[NAME REDACTED] has made significant progress in her handwriting abilities. She is now writing 3 to 4 sentences comprised of 6 - 10 words each with grade-appropriate letter size and 70% accuracy in pacing between words on adaptive lined paper."}
    progessReport3Date={"5/26/2023"}
    progessReport3Description={"[NAME REDACTED] continues to work on copying 4 or more sentences of 7 to 10 words with verbal reminders for appropriate line placement and to put in the appropriate punctuation mark at the end of a sentence."}
    annualGoalDate={"8/30/2023"}
    annualGoalDescription={"By 8/30/2023, Keiry will display improved fine motor skills to meet the measurable objectives for increased independence and greater success in classroom activities, given adaptive materials/tools and verbal cues as needed, in 4 out of 5 opportunities."}/>
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
                    <text className='leading-relaxed whitespace-pre-line overflow-y-auto'>{translationText[pageIndex]}</text>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label="Download" />
                <div role="tabpanel" className="tab-content p-5 h-screen overflow-auto flex-none">
                    <iframe className='iframe h-full' src={`/iep_translated.pdf`} type="application/pdf" width='100%' height='100%' loading="lazy"/>
                </div>
            </div>)}
        </div>
    );
}