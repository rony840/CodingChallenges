import {useEffect, useState} from 'react';
import csv from  '../assets/data.csv';
const CsvReader = () =>{
    const [csvText, setText] = useState();
    useEffect(()=>{
        const loadData = () =>{
            fetch(csv)
            .then((res)=>res.text())
            .then(resText => {
                    setText(resText);
            })
        }
        loadData();
    },[])
    let csvArr = csvText?.split('\n')
    return(
        <div>
            <p>Display CSV</p>
            <table>
                <tbody>
               { csvArr?.map((data, index)=>{
                return(
                    <tr key={index}>
                        <td key={index}>
                            {data}
                        </td>
                    </tr>
                )
               })
               }
                </tbody>
            </table>
        </div>
    )
}
export default CsvReader;