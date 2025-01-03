// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import Scripture from "./components/Scripture"
import scriptureRef from "./scriptureRef";


export default function App(){
    //const theNamesOfTheLord = ["YAHWEH", "THE WORD", "THE SON OF GOD", "THE LAMB OF GOD", "my LIFE", "my MASTER", "my ONLY WISDOM"];
    const GTLJC_scriptures = scriptureRef.map( GTLJC_x => <Scripture 
                                                            subject = {GTLJC_x.subject}
                                                            verse = {GTLJC_x.verse} />
                                            )
    return(
        <div className = "GTLJC_app">
           {GTLJC_scriptures}
        </div>  
    )
}

// export default function App(){
//     return(
//         <div>
//             <Scripture 
//                 subject = "The Lord is my Shpeherd, i shall not want"
//                 verse = "Psalms 23:1"
//                 isTrue = {1267}
//                 references = {1267}
//                 translations = {1267}
//                 inspired_authors = {JSON.stringify({author: "david"})}
//             />
            
//             <Scripture 
//                 subject = "The Lord is my Shpeherd, i shall not want"
//                 verse = "Psalms 23:1"
//                 inspired_authors = {JSON.stringify({author: "david"})}
            
//             />
//             <Scripture 
//                 subject = "The Lord is my Shpeherd, i shall not want"
//                 verse = "Psalms 23:1"
//                 inspired_authors = {JSON.stringify({author: "david"})}
            
//             />
//             <Scripture 
//                 subject = "The Lord is my Shpeherd, i shall not want"
//                 verse = "Psalms 23:1"
//                 inspired_authors = {JSON.stringify({author: "david"})}
            
//             />
//             <Scripture 
//                 subject = "The Lord is my Shpeherd, i shall not want"
//                 verse = "Psalms 23:1"
//                 inspired_authors = {JSON.stringify({author: "david"})}
            
//             />
//             <Scripture 
//                 subject = "The Lord is my Shpeherd, i shall not want"
//                 verse = "Psalms 23:1"
//                 inspired_authors = {JSON.stringify({author: "david"})}
            
//             />
    
//         </div>
//     )
// }