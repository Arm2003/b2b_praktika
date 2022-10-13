export const utestner = {
    utest: [
        { id: 0, name: 'Apple', type: 'juice', ingredients: 'apple' },
        { id: 1, name: 'aaA', type: 'qqqq', ingredients: 'orange' }
    ],
    newItem: { id: '', name: '', type: '', ingredients: '' },
    programList: [
        {
            id: 0, daysProgram: [
                { id: 0, day: "Day1", utest_id: '', time: '13:00', ingredients: '' },
                { id: 1, day: "Day2", utest_id: '', time: '01:00', ingredients: '' },
                { id: 2, day: "Day3", utest_id: '', time: '19:00', ingredients: '' },
            ]
        },
        {
            id: 1, daysProgram: [
                { id: 0, day: 'Day11', utest_id: '', time: '10:00', ingredients: '' }
            ]
        }
    ],
    newDayProgram: { id: '', day: '', utest_id: '', time: '', ingredients: '' }
}