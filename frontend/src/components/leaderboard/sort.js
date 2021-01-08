export const sortByRollNo = (state) => {
    state.roll_icon === 'ASC' ? state.marks.sort(
        // descending order
        (a, b) => b.roll_no - a.roll_no
    ) : state.marks.sort(
        // ascending order
        (a, b) => a.roll_no - b.roll_no
    )

    state.roll_icon === 'ASC'
        ? state.changeIcon('roll_icon', 'DSC')
        : state.changeIcon('roll_icon', 'ASC')
}


export const sortByName = (state) => {
    state.name_icon === 'ASC' ? state.marks.sort((a, b) => {
        // descending order
        let A = a.name.toUpperCase()
        let B = b.name.toUpperCase()
        if (B < A) { return -1 }
        if (B > A) { return 1 }
        return 0
    }) : state.marks.sort((a, b) => {
        // ascending order
        let A = a.name.toUpperCase()
        let B = b.name.toUpperCase()
        if (A < B) { return -1 }
        if (A > B) { return 1 }
        return 0
    })

    state.name_icon === 'ASC'
        ? state.changeIcon('name_icon', 'DSC')
        : state.changeIcon('name_icon', 'ASC')
}

export const sortByMaths = (state) => {
    state.math_icon === 'DSC' ? state.marks.sort(
        // ascending order
        (a, b) => a.maths - b.maths
    ) : state.marks.sort(
        // descending order
        (a, b) => b.maths - a.maths
    )

    state.math_icon === 'DSC'
        ? state.changeIcon('math_icon', 'ASC')
        : state.changeIcon('math_icon', 'DSC')
}

export const sortByPhysics = (state) => {
    state.phys_icon === 'DSC' ? state.marks.sort(
        (a, b) => a.physics - b.physics
    ) : state.marks.sort(
        (a, b) => b.physics - a.physics
    )

    state.phys_icon === 'DSC'
        ? state.changeIcon('phys_icon', 'ASC')
        : state.changeIcon('phys_icon', 'DSC')
}

export const sortByChemistry = (state) => {
    state.chem_icon === 'DSC' ? state.marks.sort(
        (a, b) => a.chemistry - b.chemistry
    ) : state.marks.sort(
        (a, b) => b.chemistry - a.chemistry
    )

    state.chem_icon === 'DSC'
        ? state.changeIcon('chem_icon', 'ASC')
        : state.changeIcon('chem_icon', 'DSC')
}

export const sortByTotal = (state) => {
    state.total_icon === 'DSC' ? state.marks.sort(
        (a, b) => a.total - b.total
    ) : state.marks.sort(
        (a, b) => b.total - a.total
    )

    state.total_icon === 'DSC'
        ? state.changeIcon('total_icon', 'ASC')
        : state.changeIcon('total_icon', 'DSC')
}

export const sortByPercentage = (state) => {
    state.prcnt_icon === 'DSC' ? state.marks.sort(
        (a, b) => a.percentage - b.percentage
    ) : state.marks.sort(
        (a, b) => b.percentage - a.percentage
    )

    state.prcnt_icon === 'DSC'
        ? state.changeIcon('prcnt_icon', 'ASC')
        : state.changeIcon('prcnt_icon', 'DSC')
}