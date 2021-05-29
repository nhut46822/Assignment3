class Student {
    constructor(name, mark, gender, subjects) {
        this.name = name
        this.mark = mark
        this.gender = gender
        this.subjects = subjects
    }
}

   var s1 = new Student('Nhựt', 8.5, 0, [{title: 'toán', mark: 6}, {title: 'lý', mark: 7}])
   var s2 = new Student('Trung', 5, 0, [{title: 'toán', mark: 7}, {title: 'lý', mark: 4}])
   var s3 = new Student('Quang', 4.5, 1, [{tiile: 'toán', mark: 4}, {title: 'lý', mark: 5}])
   var s4 = new Student('Đăng', 9, 1, [{title: 'toán', mark: 8}, {title: 'lý', mark: 6}])
   var s5 = new Student('Thúy', 10, 0, [{title: 'toán', mark: 8}, {title: 'lý', mark: 8}])
   var s6 = new Student('Minh', 7, 0, [{title: 'toán', mark: 9}, {title: 'lý', mark: 6}])
   var s7 = new Student('Hải', 6, 1, [{title: 'toán', mark: 4}, {title: 'lý', mark: 9}])
   var s8 = new Student('Ngọc', 0, 0, [{title: 'toán', mark: 3}, {title: 'lý', mark: 0}])
   var s9 = new Student('Tiên', 8, 0, [{title: 'toán', mark: 7}, {title: 'lý', mark: 5}])
   var s10 = new Student('Anh', 0, 0, [{title: 'toán', mark: 2}, {title: 'lý', mark: 9}])


let array = []
array.push(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10)

// console.log(array);
// console.log(Array.isArray(s1));
//Sắp xếp điểm theo chiều từ lớn đến bé
function long() {
    var long = array.reduce((init, value) => {
        var Diem =  value.mark
        return init.concat(Diem)
    },[])
    long.sort((a,b) => {
        return b-a
    })
    console.log(long);
}

//Sắp xếp điểm theo chiều từ bé đến lớn
function sort() {
    var sort = array.reduce((init, value) => {
        var Diem =  value.mark
        return init.concat(Diem)
    },[])
    sort.sort((a,b) => {
        return a-b
    })
    console.log(sort);
}

//Sắp xếp điểm theo điểm tích lũy lơn hơn 5
function thing() {
    var thing = array.filter((init) => {
        var diem =  init.mark
        var gioitinh = init.gender
        if(diem > 5 && gioitinh === 1) {
            console.log(init);
        }
        
    })
}
// console.log(thing);


//Sắp xếp điểm theo điểm toán hoặc lý lớn hơn 8.0
function what() {
    var what = array.filter((init) => {
        var diem =  init.subjects[0].mark;
        var diem1 =  init.subjects[1].mark;
        if(diem > 8 || diem1 > 8) {
            console.log(init);
        }
        
    })
}
// console.log(what)

// Điểm toán lớn nhất và nhỏ nhất
function why() {
    var why = array.reduce((init, value) => {
        const diem = [value.subjects[0].mark]
        let a = init.concat(diem);
        return a
    }, [])

    // console.log(why);
    const whymax = Math.max(...why)
    const whymin = Math.min(...why)

    console.log(`Điểm toán cao nhất:  ${whymax}`)
    console.log(`Điểm toán thấp nhất:  ${whymin}`)
}

// Xóa sinh viên có điểm tích lũy bằng 0
function whom() {
    var whom = array.filter((value) => {
        return value.mark !== 0;
    })
    console.log(whom)
}

//Thêm 3 sinh viên
var s11 = new Student('TT', 8, 0, [{title: 'toán', mark: 6}, {title: 'lý', mark: 6}])
var s12 = new Student('VV', 7, 0, [{title: 'toán', mark: 7}, {title: 'lý', mark: 5}])
var s13 = new Student('HH', 9, 0, [{title: 'toán', mark: 8}, {title: 'lý', mark: 8}])