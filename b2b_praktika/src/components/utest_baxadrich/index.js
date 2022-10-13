import { useSelector } from 'react-redux'
import UtestStyle from './style.module.css'
import { useState } from 'react'

function Utest_baxadrich() {
    let { utest } = useSelector((state) => state.uState)
    const { newItem } = useSelector((state) => state.uState)
    let [utestner, setUtestner] = useState(utest)

    function editValue() {
        let ss = document.getElementsByTagName('td')
        let tdArray = Array.from(ss)
        tdArray.map((elm) => {
            let value = elm.innerHTML;
            elm.innerHTML = `<input value=${value} class="editedRow"></input>`
        })
    }
    var x = []
    function saveEdit() {
        let newRows = document.getElementsByClassName('newRow')
        let newRowsArray = Array.from(newRows)
        if (newRowsArray.length != 0) {
            newRowsArray.map((elm, i) => {
                console.log();
                if (i % 3 == 0) {
                    utest[utest.length - 1]['name'] = elm.value
                    elm.parentNode.innerHTML = utest[utest.length - 1]['name']
                }
                else if (i % 3 == 1) {
                    utest[utest.length - 1]['type'] = elm.value
                    elm.parentNode.innerHTML = utest[utest.length - 1]['type']
                }
                else if (i % 3 == 2) {
                    utest[utest.length - 1]['ingredients'] = elm.value
                    elm.parentNode.innerHTML = utest[utest.length - 1]['ingredients']
                }
            })
            setUtestner(utest)
        }
        else {
            let tr = document.getElementsByClassName('tableAllTox')
            let trArray = Array.from(tr)
            let editedRows = document.getElementsByClassName("editedRow")
            let editedRows1 = document.getElementsByTagName('td')
            let editedRowsArray = Array.from(editedRows)
            let editedRowsArray1 = Array.from(editedRows1);


            for (let z = 0; z < trArray.length; z++) {
                x.push(new Object({ "id": "", "name": "", "type": "", "ingredients": "" }))
            }
            let rowId = 0;
            console.log(editedRowsArray1);
            editedRowsArray1.map((elm, i) => {
                let row = editedRowsArray[i];
                rowId = parseInt(elm.parentNode.getAttribute("id"));
                x[rowId]['id'] = rowId;
                if (i % 3 == 0) {
                    x[rowId]['name'] = row.value
                    elm.innerText = x[rowId]['name']
                }
                else if (i % 3 == 1) {
                    x[rowId]['type'] = row.value
                    elm.innerText = x[rowId]['type']
                }
                else if (i % 3 == 2) {
                    x[rowId]['ingredients'] = row.value
                    elm.innerText = x[rowId]['ingredients']
                }
            })
            utest = x
            setUtestner(utest)
        }


    }
    function addItem() {
        setUtestner(utest.push(new Object({ "id": utest.length, "name": "", "type": "", "ingredients": "" })))
        console.log(utest);
        let z = []
        setTimeout(() => {
            let allTd = document.getElementsByTagName('td')
            let allTdArray = Array.from(allTd)
            console.log(allTdArray);
            allTdArray.map((elm) => {
                if (elm.innerHTML == '') {
                    elm.innerHTML = `<input class="newRow"></input>`
                }
            })
        }, 1);
    }


    return (
        <div className={UtestStyle.fullEj}>
            <div className={UtestStyle.buttons}>
                <button onClick={saveEdit}>Save</button>
                <button onClick={editValue}>Edit</button>
                <button onClick={addItem}>add new Items</button>
            </div>
            <div className={UtestStyle.table}>
                <table className="table table-dark table-bordered table-hover">
                    <thead>
                        <tr className='112'>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Ingredients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utest.map((elm, i) => {
                            console.log(i);
                            return (
                                <tr key={i} id={elm.id} className='tableAllTox'>
                                    <td>{elm.name}</td>
                                    <td>{elm.type}</td>
                                    <td>{elm.ingredients}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>

        </div >
    )
}

export default Utest_baxadrich