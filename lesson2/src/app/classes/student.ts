class Student {
    /**
     *
     */
    constructor(public name: string, public marks: Array<{subject: string, mark: number}>) {
    }

    get average(): number {
        return this.marks.reduce((sum, next) => sum + next.mark, 0) / this.marks.length;
    }
}


const students: Array<Student> = [
    new Student('aaaa', [
        {subject: 'math', mark: 80},
        {subject: 'geography', mark: 78},
        {subject: 'history', mark: 92},
    ]),
    new Student('bbbb', [
        {subject: 'math', mark: 100},
        {subject: 'geography', mark: 98},
        {subject: 'history', mark: 95},
    ]),
    new Student('cccc', [
        {subject: 'math', mark: 70},
        {subject: 'geography', mark: 80},
        {subject: 'history', mark: 60},
    ]),
    new Student('dddd', [
        {subject: 'math', mark: 70},
        {subject: 'geography', mark: 85},
        {subject: 'history', mark: 100},
    ]),
    new Student('eeee', [
        {subject: 'math', mark: 98},
        {subject: 'geography', mark: 89},
        {subject: 'history', mark: 93},
    ])
]

export {
    Student,
    students
}
