import { useState } from 'react'
import { useSelector } from 'react-redux'
import MenuStyle from './style.module.css'

function Menu() {
    let { utest } = useSelector(state => state.uState)
    let { programList } = useSelector(state => state.uState)
    let ingredients = ''
    let [ingredient, setIngredient] = useState(ingredients)
    let programId = ''
    let [program, setProgram] = useState(programList[0])
    let [daysPrograms, setDaysPrograms] = useState(programList[0].daysProgram)
    let thisProgram = ''

    function changeProgram() {
        let programs = document.getElementById('programList')
        let value = +programs.value
        programId = value
        if (programList[value] != undefined) {
            thisProgram = programList[value]
            program = thisProgram
            setProgram(program)
            setDaysPrograms(thisProgram.daysProgram)
            console.log(thisProgram);
        }
    }

    function searhFromId() {
        debugger
        let programs = document.getElementById('programList')
        let value1 = +programs.value
        console.log(value1);
        if (!isNaN(value1)) {
            let kk = document.getElementsByName('dishes')
            let kkArray = Array.from(kk)
            kkArray.map((elm, i) => {
                if (utest[+elm.value] !== undefined) {
                    let ingredientss = utest[+elm.value].ingredients
                    programList[value1].daysProgram[i].utest_id = +elm.value
                    programList[value1].daysProgram[i].ingredients = ingredientss
                    setDaysPrograms(programList[value1].daysProgram)
                }
            })
        }
        else {
            alert('Check favorite program in Program List!!!')
        }

    }


    function editProgram() {
        let allTd = document.getElementsByTagName('td')
        let allTdArray = Array.from(allTd)
        allTdArray.map((elm, i) => {
            if (!elm.innerHTML.includes('<select')) {
                let value = elm.innerText
                elm.innerHTML = `<input value=${value} class="editedRow"></input>`
            }
        })
    }

    function addItem() {
        let programs = document.getElementById('programList')
        let value = +programs.value
        if (!isNaN(value)) {
            setProgram(programList[value].daysProgram.push(new Object({
                "id": programList[value].daysProgram.length, "day": "", "utest_id": "", 'time': '', "ingredients": ""
            })))
            setTimeout(() => {
                let allTd = document.getElementsByTagName('td')
                let allTdArray = Array.from(allTd)
                allTdArray.map((elm) => {
                    if (elm.innerHTML == '') {
                        elm.innerHTML = `<input class="newRow"></input>`
                    }
                })

            }, 1);
        }
        else {
            alert('Check favorite program in Program List!!!')
        }
    }

    function saveChange() {
        let newRows = document.getElementsByClassName('newRow')
        let newRowsArray = Array.from(newRows)
        let programs = document.getElementById('programList')
        let value1 = +programs.value
        if (!isNaN(value1)) {
            if (newRowsArray.length != 0) {
                newRowsArray.map((elm, i) => {
                    if (i % 3 == 0) {
                        programList[value1].daysProgram[programList[value1].daysProgram.length - 1]['day'] = elm.value
                        elm.parentNode.innerHTML = programList[value1].daysProgram[programList[value1].daysProgram.length - 1]['day']
                    }
                    else if (i % 3 == 1) {
                        programList[value1].daysProgram[programList[value1].daysProgram.length - 1]['time'] = elm.value
                        elm.parentNode.innerHTML = programList[value1].daysProgram[programList[value1].daysProgram.length - 1]['time']
                    }
                    else if (i % 3 == 2) {
                        programList[value1].daysProgram[programList[value1].daysProgram.length - 1]['ingredients'] = elm.value
                        elm.parentNode.innerHTML = programList[value1].daysProgram[programList[value1].daysProgram.length - 1]['ingredients']
                    }
                })
            }
            else {
                let tbodyTr = document.getElementsByClassName('TbodyTr')
                let allInput = document.getElementsByTagName('input')
                let allTdforChange = document.getElementsByClassName('forChange')
                let tbodyTrArray = Array.from(tbodyTr)
                let allTdArrayForChange = Array.from(allTdforChange)
                let valuesArray = []
                let newArrayForSave = []
                let rowId = 0
                let allInputArray = Array.from(allInput)
                console.log(allTdArrayForChange);
                allInputArray.map((elm, i) => {
                    valuesArray.push(elm.value)
                })
                for (let z = 0; z < tbodyTrArray.length; z++) {
                    newArrayForSave.push(new Object({ "id": "", "day": "", "dish": "", "time": "", "ingredients": "" }))
                }
                allTdArrayForChange.map((elm, i) => {
                    let dishes = document.getElementById('dishes')
                    console.log(dishes);
                    rowId = parseInt(elm.parentNode.getAttribute("id"));
                    let row = allInputArray[i]
                    console.log(row, i);
                    newArrayForSave[rowId]['id'] = rowId;
                    if (i % 3 == 0) {
                        newArrayForSave[rowId]['day'] = row.value
                        elm.innerText = newArrayForSave[rowId]['day']
                    }
                    if (i % 3 == 1) {
                        newArrayForSave[rowId]['time'] = row.value
                        elm.innerText = newArrayForSave[rowId]['time']
                    }
                    if (i % 3 == 2) {
                        newArrayForSave[rowId]['ingredients'] = row.value
                        elm.innerText = newArrayForSave[rowId]['ingredients']
                    }
                })
            }
        }
        else {
            alert('Check favorite program in Program List!!!')
        }

    }

    return (
        <div className={MenuStyle.fullEj1}>
            <div className={MenuStyle.buttonsStyle}>
                <button>
                    <select name="programList" id="programList" onChange={changeProgram}>
                        <option>Program list</option>
                        {programList.map((elm, i) => {
                            return (
                                <option value={elm.id} key={i}>Program {i}</option>
                            )
                        })}
                    </select>
                </button>
                <button onClick={editProgram}>Edit program</button>
                <button onClick={addItem}>Add new item</button>
                <button onClick={saveChange}>Save</button>
            </div>
            <div className={MenuStyle.tableStyle} >
                <table className="table table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Dish</th>
                            <th>Time</th>
                            <th>Ingredients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            daysPrograms.map((elm, i) => {
                                return (
                                    <tr key={i} id={elm.id} className='TbodyTr'>
                                        <td className='forChange'>{elm.day}</td>
                                        <td>
                                            <select name="dishes" id="dishes" onChange={searhFromId}>
                                                <option value={'?'}></option>
                                                {utest.map((elm1, i) => {
                                                    return (
                                                        <option value={elm1.id} tt={elm.id} key={i}>Dish {i}</option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                        <td className='forChange'>{elm.time}</td>
                                        <td className='forChange'>{elm.ingredients}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Menu